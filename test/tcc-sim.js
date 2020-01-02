var request = require('request');
var inspect = require('util').inspect;
var tcsUtil = require('./tcsUtils');

// added some comments, to test github version control
var dstHost = process.argv[2];
var dstPort = process.argv[3];

var destURL = 'http://'+  dstHost + ':' + dstPort;
tcsUtil.setOutputLevel("debug"); 


var buf = Buffer.alloc(1024, '');
var dstOptions = {
	url: destURL,
	method: 'POST',
	headers: {'Content-Type': 'text/xml'},
	body:    buf
	};
// add one more line of comment
tcsUtil.SHOW_AppOutput("debug",'\nNode.js TCC simulator.\nUsage: node tcc-sim.js <dest host> <dest port>\n');
tcsUtil.SHOW_AppOutput("debug",'\nsending request to: '+ dstOptions.url);
tcsUtil.SHOW_AppOutput("debug",'sending body: \n' + dstOptions.body);

request(dstOptions, function(err, res, body) {
    if (err) { throw err; }
    tcsUtil.SHOW_AppOutput("debug",inspect({
      err: err,
      res: {
        statusCode: res.statusCode
      },
	  body: body
    }));
	
	if (res.statusCode === 200)	{
		tcsUtil.SHOW_AppOutput("debug", "msg sending OK!\n");
	}	else	{
		tcsUtil.SHOW_AppOutput("debug", "msg sending failed!\n");
	}
});
