module.exports = function(app){
	app.get('/',function(req,res){
		var data = {
			title : '后台管理系统'
		};
		res.render('index',data);
	});
	app.get('/svg',function(req,res){
		res.render('svg');
	});
}
