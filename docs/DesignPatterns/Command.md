> 命令模式是一种行为设计模式，它可将请求转换为一个包含与请求相关的所有信息的独立对象。该转换让你能根据不同的请求将方法参数化、延迟请求执行或将其放入队列中， 且能实现可撤销操作

```javascript
class Cockpit {
	constructor(command) {
		this.command = command;
	}

	execute() {
		this.command.execute();
	}
}

class Turbine {
	constructor() {
		this.state = false;
	}

	on() {
		this.state = true;
	}

	off() {
		this.state = false;
	}
}

class OnCommand {
	constructor(turbine) {
		this.turbine = turbine;
	}

	execute() {
		this.turbine.on();
	}
}

class OffCommand {
	constructor(turbine) {
		this.turbine = turbine;
	}

	execute() {
		this.turbine.off();
	}
}

const turbine = new Turbine();
const onCommand = new OnCommand(turbine);
const offCommand = new OffCommand(turbine);
const cockpit = new Cockpit(onCommand);
const offCockpit = new Cockpit(offCommand);

cockpit.execute();
offCockpit.execute();
```
