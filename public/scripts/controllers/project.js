'use strict';

/**
 * Created by apple-tc on 14-8-27.
 */

angular.module('jiantuoApp').controller('ProjectCtrl', function ($scope) {
    $scope.activeId=0;
    $scope.projects=Scaffold.projects;
    $scope.materials=Scaffold.materials;

    $scope.displayDetail=function(id){
        var $panel=$('#sodo-project-detail-panel').HorizonSlidePanel({fullHight:true});
        if($panel.isVisible()){
            $panel.hide();
        }
        $scope.selectedProject=Sodo.search($scope.projects).by('_id',id);
        $scope.activeId=id;
        $panel.show();
    }

    $scope.sum=function(data){
        var result=0;
        if(!data||data.length==0)return 0;
        $.each(data,function(idx,data){
            result += data.amount;
        });
        return result;
    }

    $scope.getProportion=function(phase,contractData){
        var total= 0;
        if(!contractData||contractData.length==0)return 0;
        $.each(contractData,function(idx,data){
            total += data.amount;
        });
        if(total==0)return 0;
        return phase.amount / total * 100;
    }

    $('#sodo-project-new-panel').HorizonSlidePanel({left:true,fullHight:true,trigger:$('#sodo-btn-new')});
    Sodo.dtPicker();

});