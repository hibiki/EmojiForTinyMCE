tinyMCEPopup.requireLangPack();

var EmojiDialog = {
	addKeyboardNavigation: function(){
		var tableElm, cells, settings;
			
		cells = tinyMCEPopup.dom.select("a.yy_emoji_link", "yy_emoji_table");
			
		settings ={
			root: "yy_emoji_table",
			items: cells
		};
		cells[0].tabindex=0;
		tinyMCEPopup.dom.addClass(cells[0], "mceFocus");
		if (tinymce.isGecko) {
			cells[0].focus();		
		} else {
			setTimeout(function(){
				cells[0].focus();
			}, 100);
		}
		tinyMCEPopup.editor.windowManager.createInstance('tinymce.ui.KeyboardNavigation', settings, tinyMCEPopup.dom);
	}, 
	init : function(ed) {
		tinyMCEPopup.resizeToInnerSize();
		this.addKeyboardNavigation();
	},

	insert : function(file, title) {
		var ed = tinyMCEPopup.editor, dom = ed.dom;

		tinyMCEPopup.execCommand('mceInsertContent', false, dom.createHTML('img', {
//			src : tinyMCEPopup.getWindowArg('plugin_url') + '/img/' + file,
			src : tinyMCEPopup.getWindowArg('plugin_url') + '/img/' + file,
//			alt : ed.getLang(title),
			alt : '',
//			title : ed.getLang(title),
			border : 0
		}));

		tinyMCEPopup.close();
	}
};

tinyMCEPopup.onInit.add(EmojiDialog.init, EmojiDialog);
