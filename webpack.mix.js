// richiama il pacchetto laravel mix
let mix = require('laravel-mix');

// diciamo di andare a prendere il file scss e lo va a mettere in dist
mix.sass('src/app.scss', 'dist/');
