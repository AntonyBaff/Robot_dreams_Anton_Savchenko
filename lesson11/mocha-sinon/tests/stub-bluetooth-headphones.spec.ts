import { expect } from 'chai';
import sinon from 'sinon';
import { BluetoothHeadphones } from 'src/bluetooth-headphones';

describe('BluetoothHeadphones stubbing test', () => {
    describe('(Stub) BluetoothHeadphones with object instance', () => {
        const myHeadphones = new BluetoothHeadphones();

        const instance = sinon.stub(myHeadphones);

        it('1. (Stub) turnOn should turn on headphones', () => {
            // Arrange
            // because is stub we should defined our function behavior
            instance.turnOn.returns((() => {
                instance.status = true;
                instance.indicatorLed = 'Green';
            })());

            // Act
            instance.turnOn();

            // Assert
            expect(myHeadphones.currentStatus).to.be.equal(true);
        });
    });

    describe('(createStubInstance) BluetoothHeadphones with object instance', () => {
        const instance = sinon.createStubInstance(BluetoothHeadphones);

        it('1. (createStubInstance) turnOn should turn on headphones', () => {
            // Arrange
            instance.turnOn.returns((() => {
                instance.status = true;
                instance.indicatorLed = 'Green';
            })());

            // Act
            instance.turnOn();

            // Assert
            expect(instance.currentStatus).to.be.equal(true);
        });
    });
});
