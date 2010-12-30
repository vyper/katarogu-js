/**
 * Katarogu model application class
 * @author ggorosito
 * @package Katarogu
 * @date 12/30/2010
 */
function Model() {
    this.items = new Array();
}

Model.prototype.init = function( items ) {
    for( var i = 0; i < items.length; i++ ) {
	this.add( items[i] );
    }
}

Model.prototype.add = function( item ) {
    if( typeof item == 'object' ) {
	
	if( !this.items[item.id] ) {
	    this.items[item.id] = item;
	}
	else {
	    this.items[item.id].count = this.items[item.id].count + item.count;
	}
    }
    else {
	throw "Cannot add a non-object dude!";
    }
}

Model.prototype.delete = function( id ) {
    var item = this.items[id];
    
    item.count = item.count - 1;
    if( item.count <= 0 ) {
	delete this.items[id];
    }
}

Model.prototype.findByName = function( name ) {
    for( item in this.items ) {
	if( item.name.match( name ) ) {
	    return item;
	}
    }
    
    return null;
}

Model.prototype.getAll = function() {
    return this.items;
}

/**
 * Stock model class
 * @author ggorosito
 * @package Katarogu
 * @date 12/30/2010
 */
Stock.prototype = new Model();
Stock.prototype.parent = Model.prototype;
function Stock( items ) { 
    this.init( items );
}


/**
 * User cart model class
 * @author ggorosito
 * @package Katarogu
 * @date 12/30/2010
 */
Cart.prototype = new Model();
Cart.prototype.constructor = Cart;
Cart.prototype.parent = Model.prototype;
function Cart() { 
    this.total = 0;
    this.parent.items = this.items;
}


Cart.prototype.add = function( item ) {
    var item_b = $.extend( {}, item );
    
    item_b.count = 1;
    this.parent.add( item_b );
}

Cart.prototype.countItems = function() {
    var items = this.getAll();
    var result = 0;
    
    for( id in items ) {
	result = result + items[id].count;
    }
    
    return result;
}

Cart.prototype.getTotal = function() {
    this.total = 0;
    
    for( item in this.items ) {
	this.total = this.total + ( this.items[item].price * this.items[item].count );
    }
    
    return this.total;
}

