/**
 * Katarogu core application file
 * @author vyper, ggorosito 
 * @package Katarogu
 * @date 01/03/2011
 */

/**
 * Katarogu Object, this is the object that renders the entire application.
 * 
 * @author vyper, ggorosito
 * @package Katarogu
 */
var Katarogu = function( itemsPerPage ) {
    this.cart = new Cart();
    this.stock = new Stock( items );
    this.itemsPerPage = ( itemsPerPage ) ? itemsPerPage : 20;
}

Katarogu.prototype.renderCartBox = function() {
    var _this = this;
    var cart = $('#cart');
    var message = $('#message');

    cart.empty();
    message.empty();
    
    var total = this.cart.getTotal();
    
    if (this.cart.countItems() == 0) {
        message.append('Empty cart');
        this.toggleCartBox();
    } else {
        var items = this.cart.getAll();

        for( item_id in items ) {
            var item = items[item_id];
            var li = $( "<li>" + item.name + " ("+ item.count +") <a href='#removeItem'>X</a></li>" );
            li.get(0).item_id = item_id;
            
            li.click( function() {
                _this.cart.delete( this.item_id );
                _this.renderCartBox();
            });
            
            cart.append( li );
        };
        
        cart.append(
            '<li><a href="#pay">Pay</a></li>'
        );
    
        message.append(
            'cart: (' + this.cart.countItems() + ') R$ ' + float2moeda( total.toString() )
        );

        // event TODO: identificar melhor lugar pra colocar
        $('a[href="#pay"]').click(function() {
            _this.pay();
        });
    }
}
    
Katarogu.prototype.render = function() {
    var _this = this;
    var items = this.stock.getAll( this.itemsPerPage );
    var productsContainer = $("#products");
    
    for( item_id in items ) {
            productsContainer.append( items[item_id].render() );
    };

    // events TODO: identificar melhor lugar para colocar
    $('a[href="#toggleCartBox"]').click(function() { 
        _this.toggleCartBox(); 
    });
    
    // gambiarra pra carregar o lightbox TODO: arrumar
    $("a[rel^='lightbox']").colorbox({transition:"none", width:"75%", height:"75%"});
}

Katarogu.prototype.pay = function() {
    var items = this.cart.getAll();
    
    var $frequest = $('#frequest');
    $frequest.empty();
    $frequest.attr("action", "https://pagseguro.uol.com.br/checkout/checkout.jhtml");
    
    // PagSeguro
    var _form = '<input type="hidden" name="encoding" value="utf-8" />' + 
                '<input type="hidden" name="email_cobranca" value="vyper@maneh.org" />' + 
                '<input type="hidden" name="tipo" value="CP" />' +
                '<input type="hidden" name="moeda" value="BRL" id="moeda" />' +
                '<input type="hidden" name="tipo_frete" value="EN" />';
    
    var i = 1;
    for( id in items ){
            var item = items[id];
            _form = _form + '<input type="hidden" name="item_id_' + i + '" value="' + item.id + '" />' +
                            '<input type="hidden" name="item_descr_' + i + '" value="' + item.name + '" />' +
                            '<input type="hidden" name="item_quant_' + i + '" value="1" />' +
                            '<input type="hidden" name="item_valor_' + i + '" value="' + float2moeda(item.price) + '" />' +
                            '<input type="hidden" name="item_frete_' + i + '" value="0" />' +
                            '<input type="hidden" name="item_peso_' + i + '" value="0" />';
            i++;
    };
    
    $frequest.append(_form);
    $frequest.submit();
}

Katarogu.prototype.toggleCartBox = function() {
    if ( $('#cart').is(':visible') ) {
        $('#cart').toggle();
    } else if ( this.cart.countItems() > 0 ) {
        $('#cart').show();
    }
}

var Katarogu = new Katarogu();
