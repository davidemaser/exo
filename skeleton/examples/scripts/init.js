/**
 * Created by david-maser on 29/06/16.
 * require.js app init
 * uses require.css to load css with
 * the same init model
 */
requirejs.config({
    baseUrl: '../lib/',
    map: {
        '*': {
            'css': 'bower_components/require-css/css' // path to require-css
        }
    },
    shim : {
        "bootstrap" : { "deps" :['jquery'] },
        "xo" : { "deps" :['jquery'] }
    },
    paths: {
        "jquery" : 'bower_components/jquery/dist/jquery',
        "bootstrap" :  'bower_components/bootstrap/dist/js/bootstrap.min'
    }
});

require(['jquery', 'bootstrap','css!../dist/css/xo.min'], function($){
    $(function(){
        //all good let's code
    });
});