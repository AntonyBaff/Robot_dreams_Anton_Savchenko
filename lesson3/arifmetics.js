let a = 2;
let b = 4;
console.log(a + b);
console.log(a * b);
console.log(b / a);
console.log((a *= 2));
console.log((b /= 2));

const result = 2 ** 3;
console.log(result);

const aa = 9;
const bb = 2;
console.log(aa % bb);

b++;
console.log(b);

const c = 'Hello';
const d = 'World';
console.log(a + ' ' + c);
console.log(c + ' ' + d);

const e = true;
const f = false;
console.log(e + f);
console.log(e + a);
console.log(b - f);
console.log(e + ' ' + c);

const g = null;
console.log(a + g);
console.log(g);
console.log(g + c);

const i = undefined;
console.log(i);
console.log(i + a);
console.log(i + ' ' + c);

const obj = {
    key: 'value',
    key2: 'value2'
};

console.log(obj);
console.log(obj + ' ' + c);

const sym1 = Symbol('test');
const sym2 = Symbol('test');
console.log(sym1 === sym2);
