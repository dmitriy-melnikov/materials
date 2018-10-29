const resolveAfter = (time) => {
  return new Promise((resolve) => setTimeout(() => resolve(), time));
};

let order = 0;

class Singleton {
  constructor() {
    this.order = order++;
    console.log(`I'm inited!`);
  }

  static async init() {
    await resolveAfter(500);
    return new Singleton();
  }
}


let instance;

const getInstance = async () => {
  if (instance) {
    return instance;
  }
  instance = await Singleton.init();
  return instance;
};

getInstance().then((it) => console.log(it.order));
getInstance().then((it) => console.log(it.order));
getInstance().then((it) => console.log(it.order));
getInstance().then((it) => console.log(it.order));
