const path = require("path");
module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(_dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    mode: 'development'
};