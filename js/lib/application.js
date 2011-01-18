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
var Katarogu = function() {
    this.cart = new Cart();
    this.stock = new Stock( items );
}

Katarogu.prototype.renderCartBox = function() {
    var _this = this;
    var message = $('#message');
    var cartItems = $('#cartItems');

    message.empty();
    cartItems.empty();
    
    var total = this.cart.getTotal();

    if (this.cart.countItems() == 0) {
        message.append(i18n.cart.empty);
        cartItems.append($('<tr><td class="center warning noborder">' + 
                           i18n.cart.empty + 
                           '</td></tr>'));
    } else {
        cartItems.append('<tr><th>' + i18n.cart.item + '</th><th>' + 
                         i18n.cart.quantity + '</th><th>&nbsp;</th></tr>');

        var items = this.cart.getAll();

        for( item_id in items ) {
            var item = items[item_id];
            var tr = $('<tr><td>' + item.name + '</td><td class="center">' + item.count + 
                       '</td><td class="center"><a href="#removeItem">X</a></td></tr>');

            tr.get(0).item_id = item_id;
            tr.click( function() {
                _this.cart.delete( this.item_id );
                _this.renderCartBox();
            });
            
            cartItems.append( tr );
        };
        
        cartItems.append(
            '<tr><td colspan="3" class="right noborder"><a href="#pay" class="button">' + 
            i18n.cart.pay + '</a></td></tr>'
        );
            
        message.append(
            i18n.cart.name + ': (' + this.cart.countItems() + 
            ') R$ ' + float2moeda( total.toString() )
        );

        // event TODO: identificar melhor lugar pra colocar
        $('a[href="#pay"]').click(function() {
            _this.pay();
        });
    }
}
    
Katarogu.prototype.render = function() {
    var _this = this;

    // TODO: verificar se '$.getScript' é a melhor opção
    $.getScript("js/lang/" + config.language + ".js", function() {
        $( "#searchInput" ).val(null);
        $( "#searchInput" ).keyup( function() { 
            clearTimeout(this.timeout);
            
            this.timeout = setTimeout( function() {
                _this.renderContainer();
            }, config.searchInputTimeout);
        });
        
        _this.renderContainer();
        _this.renderCartBox();
        
        /*
         * TODO: inicialmente carregando apenas search e o title, mas provavelmente
         * teremos mais itens para serem traduzidos no load
         */
        $('#searchLabel').empty().append(i18n.search.label);
        $(document).attr('title', config.name);
        $('#message').attr('title', i18n.cart.name);
        $('#name').empty().append(config.name)
    
        // events TODO: identificar melhor lugar para colocar
        $('a[href="#toggleCartBox"]').colorbox({width:"50%",height:"50%", inline:true, 
                                                href:"#toggleCartBox"});
        
        // gambiarra pra carregar o lightbox TODO: arrumar
        $("a[rel^='lightbox']").colorbox({transition:"none", width:"75%", height:"75%"});
    });
}

Katarogu.prototype.renderContainer = function() {
    var items = this.stock.getAll( $( "#searchInput" ).val() );
    var productsContainer = $("#products");
    
    productsContainer.empty();
    for( item_id in items ) {
            productsContainer.append( items[item_id].render() );
    };
}

Katarogu.prototype.pay = function() {
    var items = this.cart.getAll();
    
    var frequest = $('#frequest');
    frequest.empty();
    frequest.attr("action", "https://pagseguro.uol.com.br/checkout/checkout.jhtml");
    
    // PagSeguro
    var _form = '<input type="hidden" name="encoding" value="utf-8" />' + 
                '<input type="hidden" name="email_cobranca" value="' + config.admin.email + '" />' + 
                '<input type="hidden" name="tipo" value="CP" />' +
                '<input type="hidden" name="moeda" value="BRL" id="moeda" />' +
                '<input type="hidden" name="tipo_frete" value="EN" />';
    
    var i = 1;
    for( id in items ){
            var item = items[id];
            _form = _form + '<input type="hidden" name="item_id_' + i + '" value="' + item.id + '" />' +
                            '<input type="hidden" name="item_descr_' + i + '" value="' + item.name + '" />' +
                            '<input type="hidden" name="item_quant_' + i + '" value="' + item.count + '" />' +
                            '<input type="hidden" name="item_valor_' + i + '" value="' + float2moeda(item.price) + '" />' +
                            '<input type="hidden" name="item_frete_' + i + '" value="0" />' +
                            '<input type="hidden" name="item_peso_' + i + '" value="0" />';
            i++;
    };
    
    frequest.append(_form);
    frequest.submit();
}

var Katarogu = new Katarogu();
