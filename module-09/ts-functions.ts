const calculateArea = (radius: number): number => {
  return 3.14 * radius * radius;
};

const printNumber = (number: number,
                     calculator: (number) => number = calculateArea) => {
  console.log(calculator(number));
};

printNumber(12);
// printNumber(12, null);

