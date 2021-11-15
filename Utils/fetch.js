//https://www.chrisarmstrong.dev/posts/retry-timeout-and-cancel-with-fetch

//Retries
const fetchWithRetries = async (url, options, retryCount = 0) => {
	// split out the maxRetries option from the remaining
	// options (with a default of 3 retries)
	const { maxRetries = 3, ...remainingOptions } = options;
	try {
		return await fetch(url, remainingOptions);
	} catch (error) {
		// if the retryCount has not been exceeded, call again
		if (retryCount < maxRetries) {
			return fetchWithRetries(url, options, retryCount + 1);
		}
		// max retries exceeded
		throw error;
	}
};

//Timeout
const throwOnTimeout = (timeout) =>
	new Promise((_, reject) =>
		setTimeout(() => reject(new Error('Timeout')), timeout),
	);

const fetchWithTimeout = (url, options = {}) => {
	const { timeout, ...remainingOptions } = options;
	// if the timeout option is specified, race the
	// fetch call
	if (timeout) {
		return Promise.race([
			fetch(url, remainingOptions),
			throwOnTimeout(timeout),
		]);
	}
	return fetch(url, remainingOptions);
};

//Cancel
const fetchWithCancel = (url, options = {}) => {
	const controller = new AbortController();
	const call = fetch(url, { ...options, signal: controller.signal });
	const cancel = () => controller.abort();
	return [call, cancel];
};

//example
// We don't await this call, just capture the promise
const [promise, cancel] = fetchWithCancel('https://cataas.com/cat?json=true');

// await the promise to get the response
const response = await promise;

// ...

// cancel the request (e.g. if we have rendered
// something else)
cancel();
