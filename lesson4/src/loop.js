/* Сформувати файл loop.js, у якому створити по одному циклу проходу від 0 до 9, 
на кожній ітерації якого виводитиметься значення поточного ітератора. 
Потім по одному циклу від 100 до 0 з кроком 10, де виводитиметься ітератор на кожній ітерації. */

for (let i = 0; i < 10; i++) {
    console.log('FOR(0-9) Iteration # ', i);
}

console.log('------------------');

let j = 0;
while (j < 10) {
    console.log('WHILE(0-9) Iteration #', j);
    j++;
}

console.log('------------------');

let k = 0;
do {
    console.log('DO.WHILE(0-9) Iteration #', k);
    k++;
} while (k < 10);

console.log('------------------');

for (let p = 100; p >= 0; p -= 10) {
    console.log('FOR(100-0) Iteration #', p);
}

console.log('------------------');

let u = 100;
while (u >= 0) {
    console.log('WHILE(100-0) Iteration #', u);
    u -= 10;
}

console.log('------------------');

let y = 100;
do {
    console.log('DO.WHILE(100-0) Iteration #', y);
    y -= 10;
} while (y >= 0);
