jQuery(document).ready(function() {
    
    jQuery('.settings').each(function(){
        
        var el = jQuery(this), dd;
        
        dd = el.find('.settings-dropdown');
        
        dd.css({
            'top' : '35px',
            'left' : ( el.width() / 2 ) - dd.width() / 2,
            'right' : 'auto'
        });
        
    })
    jQuery('.settings-dropdown').each(function(){
        
        var el = jQuery(this);
        
        el.find('.settings-dropdown-arr').css({
            'top' : '-13px',
            'left' : ( el.width() / 2 ) - 12,
            'right' : 'auto'
        });
        
    })

	jQuery(document).on('click touchstart', '.um-profile-edit-a', function(e) {
		jQuery(this).addClass('active');
	});
    
    jQuery(document).on('click touchstart', '.trigger-menu-on-click', function(e) {
        jQuery('.settings-dropdown').hide();
        menu = jQuery(this).find('.settings-dropdown');
        menu.show();
        e.stopPropagation();
    });
    
    jQuery(document).on('click touchstart', '.settings-dropdown-hide, body', function(e) {
        jQuery('.settings-dropdown').hide();
        e.stopPropagation();
    });
    
});