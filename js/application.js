/**
 * Katarogu core application file
 * @author vyper, ggorosito 
 * @package Katarogy
 * @date 01/03/2011
 */

var items = [
    { id: 'acucareiro', name: 'Açucareiro', price: 23.00, count: 2 },
    { id: 'assadeira-aluminio-redonda', name: 'Assadeira alumínio (redonda)', price: 9.90, count: 3 },
    { id: 'assadeira-aluminio-retangular', name: 'Assadeira alumínio (retangular)', price: 19.90, count: 3 }
];

var Stock = new Stock(items);
var Cart = new Cart();

/*
for( item in stock.items ) {
    cart.add( stock.items[item] );
}

console.log("Cart:");
console.log(cart);
console.log(cart.getTotal());

console.log("Stock:");
console.log(stock);
*/

function add(i) {
    Cart.add( Stock.items[i] );
    reloadCart();
}
    
function reloadCart() {
    $('#cart').empty();
    $('#message').empty();
    
    var total = Cart.getTotal();
    
    if (Cart.countItems() == 0) {
	    $('#message').append('Empty cart');
    } else {
	    var items = Cart.getAll();
	
	    for( item_id in items ) {
	        var item = items[item_id];
	        $('#cart').append("<li>" + item.name + "("+ item.count +") <a href='javascript:deleteItem(\"" + item_id+ "\")'>X</a></li>");
	    };
	
	    $('#cart').append(
	        '<li><a href="javascript:pay()"><img src="https://p.simg.uol.com.br/out/pagseguro/i/botoes/pagamentos/84x35-comprar.gif" /></a></li>'
	    );
	
	    $('#message').append(
	        'cart: (' + Cart.countItems() + ') R$ ' + float2moeda( total.toString() )
	    );
    }
}

function deleteItem(item) {
    Cart.delete(item);
    reloadCart();
}
    
function pay() {
    $('input[name^="item"]').remove();
    var items = Cart.getAll();
    var i = 0;
    
    for( id in items ){
	    var item = items[id];
	    $("#moeda").after(
	        '<input type="hidden" name="item_id_' + i + '" value="' + item.id + '" />'
	        + '<input type="hidden" name="item_descr_' + i + '" value="' + item.name + '" />'
	        + '<input type="hidden" name="item_quant_' + i + '" value="1" />'
	        + '<input type="hidden" name="item_valor_' + i + '" value="' + float2moeda(item.price) + '" />'
	        + '<input type="hidden" name="item_frete_' + i + '" value="0" />'
	        + '<input type="hidden" name="item_peso_' + i + '" value="0" />'
	    );
	
	    i++;
    };
    
    $('#fps').submit();
}

function viewCart() {
    reloadCart();
    
    if ($('#cart').is(':visible')) {
	    $('#cart').toggle();
    } else if (Cart.countItems() > 0) {
	    $('#cart').show();
	}
}

$(document).ready(function() {
    var items = Stock.getAll();
    
    for( item_id in items ) {
	    var item = items[item_id];
	
	    $('.products').append(
	        '<li>'
	        + '<a href="img/items/' + item.id + '.jpg" rel="lightbox" title="' + item.name + '">'
	        + '<img src="img/items/t/' + item.id + '.jpg" />'
	        + '</a>'
	        + '<p class="info">'
	        + item.name
	        + '<span class="price sell">R$ ' + float2moeda(item.price) + '</span>'
	        + '</p>'
	        + '<a href="javascript:add(\'' + item_id + '\');" class="button">Add to cart</a>'
	        + '</li>'
	    );
    };

    // gambiarra pra carregar o lightbox TODO: arrumar
    jQuery(function($) {
	    $("a[rel^='lightbox']").slimbox({/* Put custom options here */}, null, function(el) {
	        return (this == el) || ((this.rel.length > 8) && (this.rel == el.rel));
	    });
    });
});

function float2moeda(num) {
    x = 0;
    if (num<0) {
	    num = Math.abs(num);
	    x = 1;
    }
    
    if (isNaN(num)) {
	    num = "0";
	}
    
    cents = Math.floor((num*100+0.5) % 100);
    num = Math.floor((num*100+0.5) / 100).toString();

    if(cents < 10) {
        cents = "0" + cents;
    }
    
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++) {
    	num = num.substring(0,num.length-(4*i+3)) + '.' +num.substring(num.length-(4*i+3));
    }
    
    ret = num + ',' + cents;
    
    if (x == 1) {
    	ret = ' - ' + ret;
    }
    
	return ret;
}
