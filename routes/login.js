module.exports = function(app){
	app.get('/',function(req,res){
		var data = {
			title : '后台管理系统'
		};
		res.render('index',data);
	});
}
