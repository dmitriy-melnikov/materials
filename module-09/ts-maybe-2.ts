const callMe = (y:string, x?:number) => {
  console.log(y, x);
};

callMe(`param`);
callMe(`param`, undefined);
// callMe(`param`, null);
// callMe(100);
// callMe();
