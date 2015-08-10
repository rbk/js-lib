function rbk_toggle_class( el, el_class ){
		if( el.className.match( el_class ) ){
			el.className = el.className.replace(el_class, '');
		} else {
			el.className = el.className + ' ' + el_class;
		}
	}
