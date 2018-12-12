jQuery(document).ready(function() {
    
    jQuery('.settings').each(function(){
        
        var el = jQuery(this), dd;
        
        dd = el.find('.settings-dropdown');
        
        dd.css({
            'top' : '35px',
            'left' : ( el.width() / 2 ) - dd.width() / 2 - 17,
            'right' : 'auto'
        });
        
    })
    jQuery('.settings-dropdown').each(function(){
        
        var el = jQuery(this);
        
        el.find('.settings-dropdown-arr').css({
            'top' : '-30px',
            'left' : ( el.width() / 2 ) - 12,
            'right' : 'auto'
        });
        
    })

	jQuery(document).on('click', '.um-profile-edit-a', function(e) {
		jQuery(this).addClass('active');
	});
    
    jQuery(document).on('click', '.trigger-menu-on-click', function(e) {
        jQuery('.settings-dropdown').hide();
        menu = jQuery(this).find('.settings-dropdown');
        menu.show();
//        return false;
    });
    
    jQuery(document).on('click', '.settings-dropdown-hide', function(e) {
        jQuery('.settings-dropdown').hide();
        return false;
    });
    
});