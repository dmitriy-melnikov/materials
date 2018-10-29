class Cursor {
  constructor(data) {
    this.data = data;
  }

  skip(count) {
    return new Cursor(this.data.slice(count));
  }

  limit(count) {
    return new Cursor(this.data.slice(0, count));
  }

  count() {
    return this.data.length;
  }

  toArray() {
    return this.data;
  }
}

const data = [
  {name: `Пендальф`},
  {name: `Радагаст`},
  {name: `Гарри Поттер`}
];
const wizardCursor = new Cursor(data);

console.log(wizardCursor.toArray());

console.log(wizardCursor.skip(1).limit(1).toArray());
