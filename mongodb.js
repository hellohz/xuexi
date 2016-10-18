//引入mongodb驱动,并初始化一个客户端对象
const mongoClient = require('mongodb').MongoClient;
//使用mongodb协议,连接数据库
const DB_STR = "mongodb://localhost:27017/db2";

mongoClient.connect(DB_STR,function(err,db){
    if(err) throw err;
    console.log('连接成功');

    //各种操作

    //插入操作
    var c1 = db.collection('student');//获取集合
    // c1.insert({name:'tom', age:10},function(err,res){
    // 	if(err) throw err;
    // 	console.log('插入文档成功');
    // });
    //查询操作

    // c1.find().toArray(function(err,res){
    // 	if(err) throw err;
    // 	console.log(res);
    // });
    //更新操作

    // c1.update({name:'tom'},{$inc:{age:10}},function(err,res){
    // 	if(err) throw err;
    // 	console.log('更新成功');
    // });

    //删除操作

    c1.remove({name:'tom'},function(err,res){
    	if(err) throw err;
    	console.log('删除成功');
    });
    db.close();
});