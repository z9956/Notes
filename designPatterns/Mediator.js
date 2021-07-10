/**
 * 中介者模式是一种行为设计模式，能让你减少对象之间混乱无序的依赖关系。该模式会限制对象之间的直接交互，迫使它们通过一个中介者对象进行合作
 */
class TrafficTower {
	constructor() {
		this.airplanes = [];
	}

	requestPositions() {
		return this.airplanes.map((airplane) => airplane.position);
	}
}

class Airplane {
	constructor(position, trafficTower) {
		this.position = position;
		this.trafficTower = trafficTower;
		this.trafficTower.airplanes.push(this);
	}

	requestPositions() {
		return this.trafficTower.requestPositions();
	}
}

const trafficTower = new TrafficTower();
const boeing = new Airplane(10, trafficTower);
const boeing2 = new Airplane(15, trafficTower);

boeing.requestPositions(); //[10, 15]
