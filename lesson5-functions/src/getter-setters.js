const laptop = {
    name: 'asus',
    model: 123,
    color: 'silver',
    size: 15.6,
    processor: 'Intel',
    RAM: 16,
    store: {
        'store name': 'comfy',
        website: 'www.comfy.ua',
        location: {
            city: 'Dnipro',
            country: 'Ukraine',
            street: 'Shevchenko 3a'
        }
    },

    get cityAndCountry() {
        return `${this.store.location.city} ${this.store.location.street}`;
    },

    set city(city) {
        if (!city) {
            throw new Error('City is required');
        } else {
            this.store.location.city = city;
        }
    },
    func: function () {
        if (this.store.location.city === 'Odessa') {
            console.log('This laptop from Odessa');
        } else if (this.store.location.city === 'Dnipro') {
            console.log('This laptop from Dnipro');
        } else {
            console.log('This laptop from other city');
        }
    }
};

console.log('[get]', laptop.cityAndCountry);

laptop.city = 'Dnipro';
console.log('[set]', laptop.store.location.city);
laptop.func();
