function Product( item_obj ) {
    
    this.id = item_obj.id;
    
    this.name = item_obj.name;
    
    this.price = item_obj.price;
    
    this.count = item_obj.count;
}

Product.prototype.render = function() {
    var _this = this;
    var result = $("<li></li>");
    
    var productMarkup = '<a href="img/items/${id}.jpg" rel="lightbox" title="${name}"><img src="img/items/t/${id}.jpg" /></a>'
                      + '<p class="info">${name}<span class="price sell">R$ ${price}</span></p>';
    
    $.template( "productTemplate", productMarkup );
    $.tmpl( "productTemplate", this ).appendTo( result );

    var addButton = $( '<span class="button">Add to cart</span>' );
    addButton.click( function() {
        Katarogu.cart.add( _this );
        Katarogu.renderCartBox();
    });

    result.append( addButton );
    return result;
}
