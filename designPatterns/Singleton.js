/**
 * 单例是一种创建型设计模式， 让你能够保证一个类只有一个实例， 并提供一个访问该实例的全局节点
 */
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
