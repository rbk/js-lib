function rbk_toggle_class( el, el_class ){
	if( el.className.match( el_class ) ){
		el.className = el.className.replace(el_class, '');
	} else {
		el.className = el.className + ' ' + el_class;
	}
}
function inArray( value, array ){
	if( array.length > 0 ) {
	    for( var i=0; i < array.length; i++ ){
	        if( String(array[i]).match( value ) ){
	            return true;
	        }
	    }
	} else {
	    return false;
	}
}
function removeFalseValues( array ){
	for(var i=0; i < array.length; i++){
	    if( !array[i] || array[i] == false || array[i] == 'undefined'){
	        array.splice(i);
	    }
	}
	return array;
}
