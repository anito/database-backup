jQuery(document).ready( ->

    jQuery(document).on('click', '.trigger-menu-on-click', ->(e)
        jQuery('.settings-dropdown').hide()
        menu = jQuery(this).find('.settings-dropdown')
        console.log menu
        menu.show()
        return false
    )
    
)
