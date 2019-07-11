// Import a module

// Declare an http server
const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'         <p>Hello World !</p>' +
'    </body>' +
'</html>'

const url = require('url')
const qs = require('querystring')

// curl localhost:8080 or go to http://localhost:8080

module.exports = {
	serverHandle: function (req, res) {
	  const route = url.parse(req.url)
	  const path = route.pathname 
	  const params = qs.parse(route.query)
	  console.log(params)

	  res.writeHead(200, {'Content-Type': 'text/plain'});

	  if (path === '/hello' && 'name' in params) {
      if (params['name'] === 'Obed') {
        res.write('Hello my name is Obed, I am from Mexico and I study Computer Science')
      }else{
        res.write('Hello ' + params['name'])
      }
	  } else {
	    res.write('404 not found')
	  }

	  res.end();
	}
}
