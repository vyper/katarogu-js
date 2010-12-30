 /**
 * Katarogu model application class
 * @author vyper, ggorosito 
 * @package Katarogy
 * @date 12/30/2010
 */
 
function Model() {
    
    this.items = new Array();
    
    this.errors = new Array();
    
    this.init();
}

Model.prototype.init() = function() {
    
    
}

Model.prototype.append = function( item ){
    if( typeof item == 'object' ) {
	this.items.push( item );
    }
    else {
	throw "Not a product object dude!";
    }
}

Model.prototype.delete = function( id ) {
    var item = this.findById( id );
    
    if( item.index ) {
	delete this.items[item.index];
    }
}

Model.prototype.findById = function( id ) {
    var result = null;
    
    for( var i = 0; i < this.items.lenght; i++ ) {
	var item = this.items[i];
	
	if( item.id == id ) {
	    result = { index: i, item: item };
	    
	    break;
	}
    }
    
    return result;
}


Stock.prototype = new Model();
Stock.prototype.constructor = Stock;
Stock.prototype.parent = Model.prototype;
function Stock() { }

Cart.prototype = new Model();
Cart.prototype.constructor = Cart;
Cart.prototype.parent = Model.prototype;
function Cart() { }

function Product() {
    
}


