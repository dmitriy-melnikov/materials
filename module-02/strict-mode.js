'use strict';

a = 1234;

const callMe = () => {
  console.log(this);
};

callMe();
console.log(a);
