'use strict';

/**
 * @ngdoc function
 * @name jiantuoApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the jiantuoApp
 */
angular.module('jiantuoApp').controller('NavigationCtrl', function ($scope) {

    $scope.menus=[
        {'name':'摘要','url':'#dashboard','active':true},
        {
            'name':'工程',
            'children':[
                {'name':'项目','url':'#project'},
                {'name':'合同','url':'#contract'}
            ]
        },
        {
            'name':'财务',
            'children':[
                {'name':'工程账'},
                {'name':'费用流水','url':'#cashflow'},
                {'name':'工资','url':'#salary'},
                {'name':'凭证'},
                {'name':'预算'}
            ]

        },
        {'name':'报表'},
        {
            'name':'客户',
            'children':[
                {'name':'已签约客户', 'url':'#customer'},
                {'name':'未签约客户'}

            ]
        },
        {
            'name':'组织',
            'children':[
                {'name':'部门','url':'#department'},
                {'name':'职位'},
                {'name':'人员'}
            ]
        },
        {
            'name':'系统','url':'',
            'children':[
                {'name':'会计科目','url':'#account'},
                {'name':'报表定义'},
                {'name':'权限'},
                {'name':'日志'}
            ]
        }
    ];
});


