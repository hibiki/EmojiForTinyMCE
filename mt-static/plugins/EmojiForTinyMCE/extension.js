(function($) {

var config   = MT.Editor.TinyMCE.config;
var base_url = StaticURI + 'plugins/EmojiForTinyMCE/';
var buttons  =
   (config.plugin_mt_wysiwyg_buttons2 || '') + ',|,emoji';

$.extend(config, {
    plugins: config.plugins + ',emoji',
    plugin_mt_wysiwyg_buttons2: buttons
});

$.extend(config.plugin_mt_inlinepopups_window_sizes, {
    '/emoji.htm': {
    	//250,160
        width: 415,
        height: 280
    }
});

})(jQuery);
