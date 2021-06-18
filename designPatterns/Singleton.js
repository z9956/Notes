//单例模式
class Singleton {
  static instance;

  constructor () {}

  static getInstance() {
    if (!Singleton.instance) Singleton.instance = new Singleton();

    return Singleton.instance;
  }

  business() {
    console.log('业务逻辑');
  }
}

const first = Singleton.getInstance();
const last = Singleton.getInstance();

first === last ? console.log('===') : console.log('!==');
