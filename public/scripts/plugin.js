'use strict';
/**
 * Created by apple-tc on 14-8-28.
 */
(function($) {
    $.fn.HorizonSlidePanel = function(options) {
        var defaultOpts={
            initMargin:0,
            effectTime:Sodo.Constants.EffectTime,
            showCallback: Sodo.fn,
            hideCallback: Sodo.fn,
            easing:'swing',
            left:false,
            trigger:null,
            fullHight:false
        }
        var opts= $.extend(defaultOpts,options||{});

        var $panel=$(this);

        var width=$panel.css('width');
        var marginHide=-(parseInt(width)+50);
        if(opts.left){
            marginHide-=parseInt(width);
        }

        var marginOffsetShow = opts.left ? {'marginLeft':opts.initMargin} : {'marginRight':opts.initMargin};
        var marginOffsetHide = opts.left ? {'marginLeft':marginHide} : {'marginRight':marginHide} ;
        var marginCssKey = opts.left?'margin-left':'margin-right'

        var isVisible=function(){
            return parseInt($panel.css(marginCssKey)) >= 0;
        };

        var show=function(callback){
            if(opts.fullHight){
                //$panel.css({'top':$(document).scrollTop()+50});
                $panel.css({'height':$(window).height()-50});
            }
            $panel.animate(marginOffsetShow,Sodo.Constants.EffectTime,opts.easing,callback||opts.showCallback);
        };

        var hide=function(callback){
            $panel.animate(marginOffsetHide,Sodo.Constants.EffectTime,opts.easing,callback||opts.hideCallback);
        };

        var register=function($btn,fn){
            $btn.liveClick(fn);
        };

        if(opts.trigger){
            register(opts.trigger,show);
        }

        register($panel.find('.sodo-btn-close'),hide);

        return {show:show,hide:hide,isVisible:isVisible,register:register};
    };
})(jQuery);

(function($) {
    $.fn.VerticalSlidePanel = function (options) {
        var defaultOpts={
            effectTime:Sodo.Constants.EffectTime,
            showCallback: Sodo.fn,
            hideCallback: Sodo.fn,
            trigger:null
        }
        var opts= $.extend(defaultOpts,options||{});

        var $panel = $(this);

        $panel.find('.sodo-btn-close').click(function(){
            $panel.slideUp(Sodo.Constants.EffectTime);
        });

        var register=function($btn){
            $btn.click(function(){
                $panel.slideDown(Sodo.Constants.EffectTime) ;
            });
        };

        if(opts.trigger){
            register(opts.trigger);
        }

        var isVisible=function(){
            return $panel.css('display')!='none';
        };

        var show=function(callback){
            $panel.slideDown(Sodo.Constants.EffectTime,callback||opts.showCallback);
        };

        var hide=function(callback){
            $panel.slideUp(Sodo.Constants.EffectTime,callback||opts.hideCallback)
        };

        return {show:show,hide:hide,register:register,isVisible:isVisible}
    }
})(jQuery);


(function($) {
    $.fn.liveClick = function(callback) {
        $(document).on('click',$(this).selector,callback);
    }
})(jQuery);


(function($) {
    $.fn.sticky = function(options) {
        var $sticky=$(this);
        var $live=null;
        var defaultOpts={top:50,stickyClass:'sodo-stuck'};
        var opts= $.extend(defaultOpts,options||{});

        $(document).scroll(function(){
            $live=$live||$(document).find($sticky.selector);
            if($(document).scrollTop() > opts.top+$live.height()){
                if(!$live.hasClass(opts.stickyClass)){
                    $live.addClass(opts.stickyClass);
                    $live.parent().css('padding-top',$live.height());
                }
            }else if($live.hasClass(opts.stickyClass)){
                $live.removeClass(opts.stickyClass);
            }
        });
    }
})(jQuery);

(function($) {
    $.fn.exist = function(){
        if($(this).length>=1){
            return true;
        }
        return false;
    };
})(jQuery);

(function($) {
    $.fn.inlineBar = function (options) {
        var $self = $(this);
        var $bar = $('.sodo-inline-bar');
        var createBar=function(){
            var defaultOpts=[
                {
                    label: '<span class="glyphicon glyphicon-trash">',
                    action:function ($row,$a) {
                        Messenger().post("删除记录");
                    }
                },{
                    label: '<span class="glyphicon glyphicon-pencil">',
                    action: function ($row,$a) {
                        Messenger().post("编辑记录");
                    }
                }
            ]
            $bar = $('<div class="sodo-inline-bar" style="display: none;"></div>');
            $bar.height($self.height()-parseInt($bar.css('padding-top')));
            $bar.width($self.width()-parseInt($bar.css('padding-right')));
            $.each(options||defaultOpts,function(idx,obj){
                var $a = $('<a href="#" >'+obj.label+'</a>');
                $a.appendTo($bar);
                $a.click(function(){
                    obj.action($self,$a);
                });
            });
            $bar.appendTo(document.body);
            $bar.mouseleave(function(){
                $bar.css('display','none');
            });
        }

        var setPosition=function($lineBar,$row){
            var top = $row.offset().top;
            var left = $row.offset().left;
            $lineBar.css('top',top);
            $lineBar.css('left',left);
        }

        $self.mouseover(
            function(){
                if(!$bar.exist()){
                    createBar();
                }

                setPosition($bar,$(this));
                $bar.css('display','block');
            }
        );


    }
})(jQuery);