import { BluetoothHeadphones } from './bluetooth-headphones';
import { IAudioEquipment } from './iaudioequipment';
import { Speakers } from './speakers';

const myHeadphones = new BluetoothHeadphones();

myHeadphones.turnOnHeadphones();
console.log('LED Indicator is 🟢 ' + myHeadphones.currentIndicator);

myHeadphones.turnOffHeadphones();
console.log('LED Indicator is 🔴 ' + myHeadphones.currentIndicator);

function changeVolume(audioEquipment: IAudioEquipment): void {
    audioEquipment.changeVolume(101);
}

const mySpeakers = new Speakers();

changeVolume(myHeadphones);

changeVolume(mySpeakers);
