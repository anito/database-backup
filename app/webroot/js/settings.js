jQuery(document).ready(function() {
    
    jQuery('.settings').each(function(){
        
        var el = jQuery(this), dd;
        
        dd = el.find('.settings-dropdown');
        
        dd.css({
            'top' : '35',
            'left' : ( el.width() / 2 ) - dd.width() / 2 - 17,
            'right' : 'auto'
        });
        
    })
    jQuery('.settings-dropdown').each(function(){
        
        var el = jQuery(this);
        
        el.find('.settings-dropdown-arr').css({
            'top' : '-30',
            'left' : ( el.width() / 2 ) - 12,
            'right' : 'auto'
        });
        
    })

	jQuery(document).on('click touchstart', '.um-profile-edit-a', function(e) {
		jQuery(this).addClass('active');
	});
    
    jQuery(document).on('click touchstart', '.trigger-menu-on-click touchstart', function(e) {
        jQuery('.settings-dropdown').hide();
        menu = jQuery(this).find('.settings-dropdown');
        menu.show();
//        return false;
    });
    
    jQuery(document).on('click touchstart', '.settings-dropdown-hide', function(e) {
        jQuery('.settings-dropdown').hide();
        return false;
    });
    
});