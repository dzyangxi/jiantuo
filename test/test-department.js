var request = require('supertest'),
	express = require('express');

process.env.NOODE_ENV = 'test';

var app = require('../app.js');
var _id = '';

//测试的用的
var _parentId = '54228840aa89b42034c5160c';

describe('New Department',function  () {
	it('测试增加部门',function  (done) {


		request(app)
			.post('/api/departments')
			.set('Accept','application/json')
			.expect('Content-Type',/json/)
			.send({name:'部门',parentId:_parentId})
			.expect(201)
			.end(function(err,res){
				if (err) {
					throw err;
				};

				_id = res.body._id;
				done();
			});
	});
});


describe('部门列表',function(){
	it('获取部门列表',function(done){
		request(app)
			.get('/api/departments')
			.set('Accept','application/json')
			.expect('Content-Type',/json/)
			.expect(200)
			.end(function(err,res){
				if (err) {
					throw err;
				}else{
					console.log('================================================================');
					console.log('test:'+res.text);
				};

				done();
			});
	});
});


describe('PUT Post by ID',function(){
	it('更新部门',function(done){
		request(app)
			.put('/api/departments/'+_id)
			.set('Accept','application/json')
			.expect('Content-Type',/json/)
			.send({name:'我是用来做测试的'})
			.expect(200)
			.end(function(err,res){
				if (err) {
					throw err;
				}else{
					console.log(res.text);
				};

				done();
			});
	});
});


describe('DELETE By ID',function(){
	it('删除部门',function(done){
		request(app)
			.del('/api/departments/'+_id)
			.expect(204,done);
	});
});