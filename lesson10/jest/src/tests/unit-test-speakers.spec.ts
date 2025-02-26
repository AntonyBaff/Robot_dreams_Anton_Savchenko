import { expect } from 'chai';
import { Speakers } from '../speakers';

describe('Unit test suite for class Speakers', () => {
    it('1 Check changeVolume method', () => {
        // Arrange
        const obj = new Speakers();

        //Act
        obj.changeVolume(0);

        //Assert
        expect(obj.volumeControl).to.be.equal(0);
    });
    it('2 Check turnOn method', () => {
        // Arrange
        const obj = new Speakers();

        //Act
        obj.turnOn();

        //Assert
        expect(obj.status).to.be.equal('ON');
    });
    it('3. Check turnOff method', () => {
        // Arrange
        const obj = new Speakers();

        //Act
        obj.turnOff();

        //Assert
        expect(obj.status).to.be.equal('OFF');
    });
    it('4. Check turnOff method LED indicator', () => {
        // Arrange
        const obj = new Speakers();

        //Act
        obj.turnOff();

        //Assert
        expect(obj.currentIndicator).to.be.equal('Red');
    });
    it('5. Check turnOn method LED indicator', () => {
        // Arrange
        const obj = new Speakers();

        //Act
        obj.turnOn();

        //Assert
        expect(obj.currentIndicator).to.be.equal('Green');
    });
});
