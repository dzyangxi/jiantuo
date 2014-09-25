'use strict';
/**
 * @ngdoc function
 * @name jiantuoApp.controller:accountCtrl
 * @description
 * # accountCtrl
 * Controller of the jiantuoApp
 */

angular.module('jiantuoApp').controller('AccountCtrl', function ($scope) {

    $(document).ready(function(){
        initTree('sodo-account-tree')
        $('#sodo-account-new-panel').HorizonSlidePanel({initMargin:20,trigger:$('#sodo-btn-new')});


        $('#account-tab a').click(function (e) {
            e.preventDefault();
            $(this).tab('show');
        });

        $('#account-tab a[href="#assets"]').tab('show');


    });

    function initTree(id){
        var setting = {
            data:{
                key:{
                    name:'displayName'
                }
            },
            view: {
                showIcon: function(treeId, treeNode) {
                    return treeNode.isParent;
                }
            },
            /**
             async: {
            enable: true,
            type:'get',
            url:Sodo.Constants.Server+'/getAccountAdapter'
        },*/
            callback: {
                onClick: function(event,treeID, treeNode) {
                    var setFormVal=function(){
                        $('#account-code').val(treeNode.code);
                        $('#account-name').val(treeNode.name);
                    }
                    var $detailPanel = $('#sodo-account-detail-panel').VerticalSlidePanel();
                    if($detailPanel.isVisible()){
                        $detailPanel.hide(function(){
                            setFormVal();
                            $detailPanel.show();
                        });
                    }else{
                        setFormVal();
                        $detailPanel.show();
                    }

                },
                onAsyncSuccess:function(){
                    //TODO

                }
            }
        };
        $.fn.zTree.init($("#"+id), setting, Scaffold.account);
    }

}).factory('account',['$resource',function($resource){
    return $resource('/account/@code',{code:'@code'});
}]);


