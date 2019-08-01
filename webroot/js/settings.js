$(function() {
    
    $('.settings').each(function(){
        
        var el = $(this), dd;
        
        dd = el.find('.dropdown');
        sdd = el.find('.settings-dropdown');
        ddArrow = el.find('.settings-dropdown-arr');

        dd.css({
            'top' : '0',
        });
        sdd.css({
            'top' : '45px',
            'left' : ( $(this).width() / 2 ) - ( sdd.width() / 2 )
        })
        ddArrow.css({
            'top' : '-12px',
            'left' : ( sdd.width() / 2 ) - ( ddArrow.width() / 2 )
        })
        
    })

	$(document).on('click touchstart', '.um-profile-edit-a', function(e) {
		$(this).addClass('active');
	});
    
    $(document).on('click touchstart', '.trigger-menu-on-click', function(e) {
        menu = $(this).find('.settings-dropdown');
        showOrHide(menu);
        e.stopPropagation();
    });
    
    $(document).on('click touchstart', '.settings-dropdown-hide, body', function(e) {
        $('.settings-dropdown').hide();
        e.stopPropagation();
    });

    showOrHide = function(el) {
        if( el.is( ':hidden' ) ){
            el.show();
        } else {
            el.hide();
        }
    }
    
});