import { expect } from 'chai';
import { BluetoothHeadphones as Speakers } from 'src/bluetooth-headphones';

describe('Unit test suite for class Speakers', () => {
    it('1 Check changeVolume method', () => {
        // Arrange
        const obj = new Speakers();

        //Act
        obj.changeVolume(50);

        //Assert
        expect(obj.volumeControl).to.be.equal(50);

    });

    it('2 Check turnOn method', () => {
        // Arrange
        const obj = new Speakers();

        //Act
        obj.turnOn();

        //Assert
        expect(obj.status).to.be.equal(true);

    });

    it('3. Check turnOff method', () => {
        // Arrange
        const obj = new Speakers();

        //Act
        obj.turnOff();

        //Assert
        expect(obj.status).to.be.equal(false);

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
