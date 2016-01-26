function toggleClass( el, el_class ){
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
function classElements(classname){ // without the dot
	return document.getElementsByClassName(classname);
}
// Random Color
function randomHex(){
	var x = (Math.floor( Math.random()*16)+1 );
	switch( x ){
		case 1:
			return "a";
		case 2:
			return "b";
		case 3:
			return "c";
		case 4:
			return "d";
		case 5:
			return "e";
		case 6:
			return "f";
		case 7:
			return "0";
		case 8:
			return "1";
		case 9:
			return "2";
		case 10:
			return "3";
		case 11:
			return "4";
		case 12:
			return "5";
		case 13:
			return "6";
		case 14:
			return "7";
		case 15:
			return "8";
		case 16:
			return "9";
	}
}
function randomColor( ){
	var x = "#";
	for( var i = 0; i < 6; i++){
		x += randomHex();
	}
	// console.log( x );
	return x;
}

function string_to_slug( string ){

	if( typeof string === "string"  ){
		
		// process string
		string = string.toLowerCase();
		string = string.replace(/ /g, '-');
		srting = string.replace(/[^A-Za-z0-9]/g, '');
		string = string.replace("'", '');
		string = string.replace('é', 'e');

		return string;
	} else {
		return 'Not a string';
	}

}
