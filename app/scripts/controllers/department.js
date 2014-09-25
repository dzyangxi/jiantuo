'use strict'
/**
 * Created by apple-tc on 14-8-30.
 */
angular.module('jiantuoApp').controller('DepartmentCtrl', function ($scope) {

    initTree('sodo-department-tree');
    $('#sodo-department-new-panel').HorizonSlidePanel({initMargin:20,trigger:$('#sodo-btn-new'),left:true});
    function initTree(id,$detailPanel){
        var setting = {
            view: {
                showIcon: function(treeId, treeNode) {
                    return treeNode.isParent;
                }
            },
             async: {
                enable: true,
                type:'get',
                url:Sodo.Constants.Server+'/getAccountAdapter'
            },
            callback: {
                onClick: function(event,treeID, treeNode) {
                    var $detailPanel = $('#sodo-department-detail-panel').VerticalSlidePanel()
                    if($detailPanel.isVisible()){
                        $detailPanel.hide(function(){
                            //setFormVal();
                            $detailPanel.show();
                        });
                    }else{
                        //setFormVal();
                        
                        if (!treeNode.isParent) {
                            $detailPanel.show();
                        };
                    }
                },
                onAsyncSuccess:function(){
                    //TODO

                }
            }
        };
        $.fn.zTree.init($("#"+id), setting,Scaffold.departments);
    }
});
