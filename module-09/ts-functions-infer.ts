const sum = (left, right) => left + right;

let result: number;
result = sum(`12`, `22`); // string. This type is incompatible with number
// result = sum(12, `22`); // string. This type is incompatible with number
// result = sum(12, 15); // undefined (too few arguments, expected default/rest parameters)
// result = sum(true, false); // boolean. This type cannot be added to string
