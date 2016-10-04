module.exports = {
	website: {
		assets: "./assets",
		js: [
			"executor-editor.min.js",
			"launcher.js"
		]
	},
    blocks: {
        execEd: {
            parse: false,
            process: function ( block ) {
				return "<div class='executor-editor' data-width='770'>" +
					block.body +
					"</div>";
            }
        }
	}
};
