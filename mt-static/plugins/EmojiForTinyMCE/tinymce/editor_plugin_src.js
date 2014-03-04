/**
 * editor_plugin_src.js
 *
 * Copyright 2014, Yoshimi Yoshizawa (hibiki443)
 * Released under LGPL License.
 *
 */

/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */

(function(tinymce) {
	tinymce.create('tinymce.plugins.EmojiPlugin', {
		init : function(ed, url) {
			// Register commands
			ed.addCommand('mceEmoji', function() {
				ed.windowManager.open({
					file : url + '/emoji.html',
					width : 250 + parseInt(ed.getLang('emoji.delta_width', 0)),
					height : 160 + parseInt(ed.getLang('emoji.delta_height', 0)),
					inline : 1
				}, {
					plugin_url : url
				});
			});

			// Register buttons
			ed.addButton('emoji', {
//				title : 'emoji.emoji_desc',
                title: '\u7D75\u6587\u5B57',
				cmd : 'mceEmoji'
			});
		},

		getInfo : function() {
			return {
				longname : 'TinyMCE Emoji Plugin',
				author : 'Yoshimi Yoshizawa',
				authorurl : 'http://wp.graphact.com/',
				infourl : '',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('emoji', tinymce.plugins.EmojiPlugin);
})(tinymce);