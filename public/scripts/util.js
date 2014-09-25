'use strict';
/**
 * Created by apple-tc on 14-8-27.
 */

var Sodo=Sodo||{}

Sodo.Constants={
    EffectTime:200,
    Server:'http://192.168.1.114:3000'
};

Sodo.search= function (arr) {

    var result=null;

    var by = function(key,val){

        if(!$.isArray(arr))result = null;
        $.each(arr,function(idx,item){
           if(item[key]== val){
               result = item;
               return;
           }
        });
        return result;
    }
    return {by:by};
};

Sodo.extractID=function(idStr){
    if(idStr.indexOf('-')<0)return idStr;
    return idStr.substr(idStr.lastIndexOf('-'),idStr.length);
};

Sodo.dtPicker=function(){
    $('.datepicker').datepicker({
        format: "yyyy-mm-dd",
        language: "zh-CN",
        calendarWeeks: true,
        todayHighlight: true
    })
}

Sodo.fn=function(){};