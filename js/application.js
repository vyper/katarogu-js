/**
 * Katarogu core application file
 * @author vyper, ggorosito 
 * @package Katarogu
 * @date 01/03/2011
 */

var items = [
    { id: 'acucareiro', name: 'Açucareiro', price: 23.00, count: 2 },
    { id: 'assadeira-aluminio-redonda', name: 'Assadeira alumínio (redonda)', price: 9.90, count: 3 },
    { id: 'assadeira-aluminio-retangular', name: 'Assadeira alumínio (retangular)', price: 19.90, count: 3 }
];

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
    
    $('#cart').empty();
    $('#message').empty();
    
    var total = this.cart.getTotal();
    
    if (this.cart.countItems() == 0) {
        $('#message').append('Empty cart');
        this.toggleCartBox();
    } else {
        var items = this.cart.getAll();
        
        for( item_id in items ) {
            var item = items[item_id];
            var li = $( "<li>" + item.name + "("+ item.count +") <span style='cursor: pointer;'>X</span></li>" );
            li.get(0).item_id = item_id;
            
            li.click( function() {
                _this.cart.delete( this.item_id );
                _this.renderCartBox();
            });
            
            $('#cart').append( li );
        };
        
        $('#cart').append(
            '<li><a href="javascript:pay()"><img src="https://p.simg.uol.com.br/out/pagseguro/i/botoes/pagamentos/84x35-comprar.gif" /></a></li>'
        );
    
        $('#message').append(
            'cart: (' + this.cart.countItems() + ') R$ ' + float2moeda( total.toString() )
        );
    }
}
    
Katarogu.prototype.render = function() {
    var _this = this;
    var items = this.stock.getAll( this.itemsPerPage );
    var productsContainer = $("#products");
    
    for( item_id in items ) {
            productsContainer.append( items[item_id].render() );
    };

    // gambiarra pra carregar o lightbox TODO: arrumar
    jQuery(function($) {
            $("a[rel^='lightbox']").slimbox({/* Put custom options here */}, null, function(el) {
                return (this == el) || ((this.rel.length > 8) && (this.rel == el.rel));
            });
    });    
}

Katarogu.prototype.pay = function() {
    $('input[name^="item"]').remove();
    var items = this.cart.getAll();
    var i = 1;
    
    for( id in items ){
            i++;

            var item = items[id];
            $("#moeda").after(
                '<input type="hidden" name="item_id_' + i + '" value="' + item.id + '" />'
                + '<input type="hidden" name="item_descr_' + i + '" value="' + item.name + '" />'
                + '<input type="hidden" name="item_quant_' + i + '" value="1" />'
                + '<input type="hidden" name="item_valor_' + i + '" value="' + float2moeda(item.price) + '" />'
                + '<input type="hidden" name="item_frete_' + i + '" value="0" />'
                + '<input type="hidden" name="item_peso_' + i + '" value="0" />'
            );
    };
    
    $('#fps').submit();
}

Katarogu.prototype.toggleCartBox = function() {
    if ( $('#cart').is(':visible') ) {
        $('#cart').toggle();
    } else if ( this.cart.countItems() > 0 ) {
        $('#cart').show();
    }
}

var Katarogu = new Katarogu();