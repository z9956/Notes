> 生成器模式是一种创建型设计模式，使你能够分步骤创建复杂对象。该模式允许你使用相同的创建代码生成不同类型和形式的对象

```javascript
class Request {
	constructor() {
		this.url = '';
		this.method = '';
		this.payload = {};
	}
}

class RequestBuilder {
	constructor() {
		this.request = new Request();
	}

	forUrl(url) {
		this.request.url = url;
		return this;
	}

	useMethod(method) {
		this.request.method = method;
		return this;
	}

	payload(payload) {
		this.request.payload = payload;
		return this;
	}

	build() {
		return this.request;
	}
}

const requestBuilder = new RequestBuilder();

requestBuilder
	.forUrl('http://localhost')
	.useMethod('GET')
	.payload(null)
	.build(); //Request { url: 'http://localhost', method: 'GET', payload: null }
```
