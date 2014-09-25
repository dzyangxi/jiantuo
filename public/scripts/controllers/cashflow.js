'use strict';
/**
 * Created by apple-tc on 14-8-29.
 */

angular.module('jiantuoApp').controller('CashflowCtrl', function ($scope) {

    $scope.records=Scaffold.cashflow;
    $scope.setupInlinebar=function(){
        $('#sodo-project-table tr:not(:first)').inlineBar();
    }

});