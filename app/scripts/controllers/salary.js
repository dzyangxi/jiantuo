'use strict';
/**
 * Created by apple-tc on 14-9-1.
 */

angular.module('jiantuoApp').controller('SalaryCtrl', function ($scope) {
    $scope.salaries=Scaffold.salaries;
    $scope.setupInlinebar=function(){
        $('#sodo-project-table tr:not(:first)').inlineBar();
    }
});
