function Product( item_obj ) {
    
    this.id = item_obj.id;
    
    this.name = item_obj.name;
    
    this.price = item_obj.price;
    
    this.count = item_obj.count;
}

Product.prototype.render = function() {
    var _this = this;
    
    var li = $(
        '<li>'
        + '<a href="img/items/' + this.id + '.jpg" rel="lightbox" title="' + this.name + '">'
        + '<img src="img/items/t/' + this.id + '.jpg" />'
        + '</a>'
        + '<p class="info">'
        + this.name
        + '<span class="price sell">R$ ' + float2moeda(this.price) + '</span>'
        + '</p>'
        + '</li>'
    );

    var addButton = $( '<span class="button">Add to cart</span>' );

    addButton.click( function() {
        Katarogu.cart.add( _this );
        Katarogu.renderCartBox();
    });

    li.append( addButton );
    
    return li;
}
