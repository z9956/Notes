class HashTable {
	constructor() {
		this.memory = [];
	}

	hashKey(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			let code = key.charCodeAt(i);
			hash = ((hash << 5) - hash + code) | 0;
		}
		return hash;
	}

	get(key) {
		let address = this.hashKey(key);
		return this.memory[address];
	}

	set(key, value) {
		let address = this.hashKey(key);
		this.memory[address] = value;
	}

	remove(key, value) {
		let address = this.hashKey(key);
		if (this.memory[address]) delete this.memory[address];
	}
}

export default HashTable;
