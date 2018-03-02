const http = require('http'),
			port1 = 7000,
			port2 = 7500,
			server1 = http.createServer(requestA)
			server2 = http.createServer(requestB);

server1.listen(port1, function() {
	console.log("Listening on port " + port1);
});

server2.listen(port2, function() {
	console.log("Listening on port " + port2);
});

function requestA(request, response) {
	response.end("Hey! You are truly a beautiful human being :)");
}

function requestB(request, response) {
	response.end("You're such a waste of space.");
}

// * Using the previous example as a guide, create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500.
// * The one listening on port 7000 will always tell the user something good about themselves.
// * The one listening on 7500 will always tell the user something bad about themselves.
// * Make sure you create a Github repo and commit this code!

// **Bonus**

// * Look for other ways to expand what your server can do. As possibilities:
//   * Generate the good/bad phrase randomly from a list of predefined phrases
//   * Use the `twitter` package inside the response to also return a random tweet