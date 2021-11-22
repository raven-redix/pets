const Pet = require('./pets');

describe('Pet class', () => {
    test('changeName method should change the name', () => {
        const willow = new Pet('Willow', 'Canine', 'brown')
        willow.name = 'Marley';
        expect(willow.name).toBe('Marley');
    });    
});