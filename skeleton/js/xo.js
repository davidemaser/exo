/**
 * Created by david-maser on 23/06/16.
 */
var xo = {
    config:{
        loadPathDefault:'../dist/js/',
        loadPathExtension:'.js',
        ajaxPathDefault:'json/',
        ajaxFileExtension:'.json',
        ajaxDefaultMethod:'get',
        ajaxDefaultDataType:'json',
        localStorageKey:'aso-1866425',
        showErrorLog: true
    },
    init:function(advise){
        xo.pageSetUp('html','xo','true','xo set');
        advise == true ? console.log('xo is running') : null;
        var xoRunning = true;
    },
    pageSetUp:function(domItem,domPrefix,xoMin,xoClass){
        $(domItem).attr({
            'data-xo-prefix':domPrefix,
            'data-xo-min':xoMin
        }).addClass(xoClass);
    },
    loadExternal:function(scriptPath,scriptURI,scriptExt){
        var a = scriptPath == undefined || null || ' ' ? xo.config.loadPathDefault : scriptPath,
            b = scriptURI == undefined ? "" : scriptURI,
            c = scriptExt == undefined || null || ' ' ? xo.config.loadPathExtension : scriptExt,
            d = a+b+c;
        $.getScript(d, function(xoCore){
            //console.log("Script "+xoCore+" loaded but not necessarily executed.");
            eval(xoCore);
        });
    },
    log:function(e){
        var a = navigator.vendor.indexOf("Google") > -1;
        if(xo.config.showErrorLog == true) {
            a == true ? console.warn(e) : console.log(e);
        }
    },
    animate:function(obj,type,speed,length){

    },
    getData:function(scriptPath,scriptURI){
        var a = scriptPath == undefined || null || ' ' ? xo.config.ajaxPathDefault : scriptPath,
            b = scriptURI == undefined ? "" : scriptURI,
            c = xo.config.ajaxFileExtension,
            d = a+b+c;
        $.ajax({
            dataType: xo.config.ajaxDefaultDataType,
            url: d,
            type: xo.config.ajaxDefaultMethod,
            statusCode: {
                404: function() {
                    xo.log('ajax can\'t load that file');
                },
                500: function() {
                    xo.log('the server has encountered an internal error');
                },
                502: function() {
                    xo.log('bad gateway');
                },
                503: function() {
                    xo.log('the service is unavailable');
                },
                504: function() {
                    xo.log('the gateway has timed out');
                }

            }
        }).success(function(data) {
            xo.parseData(data);
        }).error(function() {
            xo.log('ajax can\'t load that file');
        });
    },
    parseData:function(data){
        console.log(data);
    },
    build:function(){
        var render = "all" || null,
            engine = [],
            scope = "dom";
    }
};
