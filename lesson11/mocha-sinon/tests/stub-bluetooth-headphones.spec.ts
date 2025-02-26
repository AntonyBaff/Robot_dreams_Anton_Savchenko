import { expect } from 'chai';
import sinon from 'sinon';
import { BluetoothHeadphones } from 'src/bluetooth-headphones';

describe('BluetoothHeadphones stubbing test', () => {
    describe('(Stub) BluetoothHeadphones with object instance', () => {
        const myHeadphones = new BluetoothHeadphones();

        const instance = sinon.stub(myHeadphones);

        it('1. (Stub) turnOn should turn on headphones', () => {
            instance.turnOn();
            expect(instance.currentStatus).to.be.equal(true);
        });
    });

    describe('(createStubInstance) BluetoothHeadphones with object instance', () => {

        const instance = sinon.createStubInstance(BluetoothHeadphones);

        it('1. (createStubInstance) turnOn should turn on headphones', () => {
            instance.turnOn.returns();
            expect(instance.currentStatus).to.be.equal(true);
        });
    });
});
