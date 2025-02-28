import { expect } from 'chai';
import sinon from 'sinon';
import { BluetoothHeadphones } from 'src/bluetooth-headphones';

describe('BluetoothHeadphones stubbing test', () => {
    describe('1. (Stub) BluetoothHeadphones with object instance', () => {
        const myHeadphones = new BluetoothHeadphones();

        const instance = sinon.stub(myHeadphones);

        it('1.1 (Stub) function turnOn should turn on headphones', () => {
            // Arrange
            instance.turnOn.returns(
                (() => {
                    instance.status = true;
                    instance.indicatorLed = 'Green';
                })()
            );

            // Act
            instance.turnOn();

            // Assert
            expect(myHeadphones.currentStatus).to.be.equal(true);
            expect(myHeadphones.currentIndicator).to.be.equal('Green');
        });

        it('1.2 (Stub) function turnOff should turn off headphones', () => {
            // Arrange
            // because is stub we should defined our function behavior
            instance.turnOff.returns(
                (() => {
                    instance.status = false;
                    instance.indicatorLed = 'Red';
                })()
            );

            // Act
            instance.turnOn();

            // Assert
            expect(myHeadphones.currentStatus).to.be.equal(false);
            expect(myHeadphones.currentIndicator).to.be.equal('Red');
        });

        it('1.3 (Stub) function changeVolume should turn off headphones', () => {
            // Arrange
            // because is stub we should defined our function behavior
            instance.changeVolume.returns(
                (() => {
                    instance.volumeControl = 75;
                })()
            );

            // Act
            instance.changeVolume(75);

            // Assert
            expect(myHeadphones.volumeControl).to.be.equal(75);
        });

        it('1.3 (Stub) function changeVolume should change volume of headphones', () => {
            // Arrange
            // because is stub we should defined our function behavior
            instance.changeVolume.returns(
                (() => {
                    instance.volumeControl = 75;
                })()
            );

            // Act
            instance.changeVolume(75);

            // Assert
            expect(myHeadphones.volumeControl).to.be.equal(75);
        });

        it('1.4 (Stub) function changeVolume should set volume to 75', () => {
            // Arrange
            instance.changeVolume.returns(
                (() => {
                    instance.volumeControl = 75;
                })()
            );

            // Act
            instance.changeVolume(75);

            // Assert
            expect(myHeadphones.volumeControl).to.be.equal(75);
        });

        it('1.5 (Stub) function changeVolume should throw an error if volume >0', () => {
            instance.changeVolume.returns(
                (() => {
                    instance.volumeControl = 0;
                })()
            );

            // Act
            instance.changeVolume(0);
            instance.changeVolume.throws(new Error('Volume should be greater than 0'));

            // Act & Assert
            expect(() => instance.changeVolume(0)).to.throw('Volume should be greater than 0');
        });

        it('1.6 (Stub) function changeVolume should throw an error if volume <100', () => {
            instance.changeVolume.returns(
                (() => {
                    instance.volumeControl = 100;
                })()
            );

            // Act
            instance.changeVolume(100);
            instance.changeVolume.throws(new Error('Volume should be less than or equal to 100'));

            // Act & Assert
            expect(() => instance.changeVolume(0)).to.throw('Volume should be less than or equal to 100');
        });
    });

    describe('2.1 (createStubInstance) BluetoothHeadphones with object instance', () => {
        const instance = sinon.createStubInstance(BluetoothHeadphones);

        it('2.1 (createStubInstance) turnOn should turn on headphones', () => {
            // Arrange
            instance.turnOn.returns(
                (() => {
                    instance.status = true;
                    instance.indicatorLed = 'Green';
                })()
            );

            // Act
            instance.turnOn();

            // Assert
            expect(instance.currentStatus).to.be.equal(true);
            expect(instance.indicatorLed).to.be.equal('Green');
        });

        it('2.2 (createStubInstance) turnOn should turn on headphones', () => {
            // Arrange
            instance.turnOff.returns(
                (() => {
                    instance.status = false;
                    instance.indicatorLed = 'Red';
                })()
            );

            // Act
            instance.turnOn();

            // Assert
            expect(instance.currentStatus).to.be.equal(false);
            expect(instance.indicatorLed).to.be.equal('Red');
        });

        it('2.3 (createStubInstance) function changeVolume should change volume of headphones', () => {
            // Arrange
            instance.changeVolume.returns(
                (() => {
                    instance.volumeControl = 75;
                })()
            );

            // Act
            instance.changeVolume(75);

            // Assert
            expect(instance.volumeControl).to.be.equal(75);
        });

        it('2.4 (createStubInstance) function changeVolume should set volume to 75', () => {
            // Arrange
            instance.changeVolume.returns(
                (() => {
                    instance.volumeControl = 75;
                })()
            );

            // Act
            instance.changeVolume(75);

            // Assert
            expect(instance.volumeControl).to.be.equal(75);
        });

        it('2.5 (createStubInstance) function changeVolume should throw an error if volume >0', () => {
            instance.changeVolume.returns(
                (() => {
                    instance.volumeControl = 0;
                })()
            );

            // Act
            instance.changeVolume(0);
            instance.changeVolume.throws(new Error('Volume should be greater than 0'));

            // Act & Assert
            expect(() => instance.changeVolume(0)).to.throw('Volume should be greater than 0');
        });

        it('2.6 (createStubInstance) function changeVolume should throw an error if volume <100', () => {
            instance.changeVolume.returns(
                (() => {
                    instance.volumeControl = 100;
                })()
            );

            // Act
            instance.changeVolume(100);
            instance.changeVolume.throws(new Error('Volume should be less than or equal to 100'));

            // Act & Assert
            expect(() => instance.changeVolume(0)).to.throw('Volume should be less than or equal to 100');
        });
    });
});
