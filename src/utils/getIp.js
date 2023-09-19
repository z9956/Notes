const getIp = (url) => {
	const hostnamePattern = /\/\/([^:/]+):/;
	const match = url.match(hostnamePattern);

	if (match) return match[1];
};

// getIp('http://localhost:8000/CLodopfuncs.js'); //localhost
// getIp('http://255.255.255.0:8000/CLodopfuncs.js'); //255.255.255.0

export default getIp;
