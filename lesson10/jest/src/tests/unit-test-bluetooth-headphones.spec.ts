import { expect } from 'chai';
import { BluetoothHeadphones } from '../bluetooth-headphones';

describe('Unit test suite for class BluetoothHeadphones', () => {
    it('1 Check changeVolume method', () => {
        // Arrange
        const obj = new BluetoothHeadphones();

        //Act
        obj.changeVolume(76);

        //Assert
        expect(obj.volumeControl).to.be.equal(76);
    });
    it('2 Check turnOn method status', () => {
        // Arrange
        const obj = new BluetoothHeadphones();

        //Act
        obj.turnOn();

        //Assert
        expect(obj.status).to.be.equal(true);
    });
    it('3. Check turnOff method status', () => {
        // Arrange
        const obj = new BluetoothHeadphones();

        //Act
        obj.turnOff();

        //Assert
        expect(obj.status).to.be.equal(false);
    });
    it('4. Check turnOff method LED indicator', () => {
        // Arrange
        const obj = new BluetoothHeadphones();

        //Act
        obj.turnOff();

        //Assert
        expect(obj.currentIndicator).to.be.equal('Red');
    });
    it('5. Check turnOn method LED indicator', () => {
        // Arrange
        const obj = new BluetoothHeadphones();

        //Act
        obj.turnOn();

        //Assert
        expect(obj.currentIndicator).to.be.equal('Green');
    });
});
