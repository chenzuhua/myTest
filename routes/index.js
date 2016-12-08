module.exports = function(app,io){
	require('./login')(app);
	require('./chat')(app,io);
}
