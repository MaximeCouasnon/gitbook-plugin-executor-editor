module.exports = {
    book: {
        js: [
            "node_modules/executor-editor/dist/executor-editor.min.js",
			"launcher.js"
        ]
    },
	blocks: {
        execEd: {
            parse: false,
            process: function ( block ) {
				return "<div class='executor-editor'>" + block.body + "</div>";
            }
        }
	}
};
