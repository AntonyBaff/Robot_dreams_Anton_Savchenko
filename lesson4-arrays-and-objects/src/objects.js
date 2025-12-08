/*
Створити файл objects.js, у якому зробити комплексний об’єкт, що мав би мінімум 2 рівні ієрархії, 
масив та метод, який виводитиме значення.
*/

const obj1 = {
    brand: 'Audi',
    model: 'A4',
    color: 'White',
    props: {
        'engine capacity': 2,
        'car body': 'sedan',
        wheel: 19,
        'transmission manual': true,
        'type of fuel': 'gas',
        'additional options': {
            AC: true,
            'leather interior': true,
            'LED headlights': false,
            'cruise control': true,
            ESP: true,
            multimedia: ['Apple CarPlay', 'Android Auto', 'Speakers BOSE', 'camera 360']
        }
    },
    func: function () {
        console.log(this.props['additional options'].multimedia);
    }
};

console.log(obj1.model);
obj1.func();
