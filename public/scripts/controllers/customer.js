'user strict'

/**
 * Created by apple-tc on 14-8-30.
 */

angular.module('jiantuoApp').controller('CustomerCtrl', function ($scope) {

    $scope.customers=Scaffold.customers;
    $scope.setupInlinebar=function(){
        $('#sodo-customer-table tr:not(:first)').inlineBar();
    }

});