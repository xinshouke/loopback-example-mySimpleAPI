//
// WARNING: THIS FILE WILL NOT RUN UNTIL YOU INSTALL, ADD, AND CONFIGURE A
// MYSQL DATA SOURCE, FOLLOWING INSTRUCTIONS IN "Getting Started with LoopBack"
// See http://docs.strongloop.com/display/LB2/Connect+an+API+to+a+datasource
//

var app = require('./server');
var dataSource = app.dataSources.accountDB;

dataSource.discoverSchema("user", {owner: 'liangtest'}, function (err, schema) {//user is table name,property owner string is databasename
	if(err){
	  console.log(err);
	}else{
      console.log(JSON.stringify(schema, null, '  '));
	}
   dataSource.disconnect();
});
