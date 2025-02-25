import { IAudioEquipment } from './iaudioequipment';

export class BluetoothHeadphones implements IAudioEquipment {
    public status: boolean;
    public volumeControl: number;

    public get currentIndicator(): string {
        return this.indicatorLed;
    }

    public get currentVolume(): number {
        return this.volumeControl;
    }

    public connectionType: string;

    public indicatorLed: string;

    public constructor() {
        this.status = false;
        this.indicatorLed = '';
        this.connectionType = 'bluetooth';
        //this.volume = 0;
        this.volumeControl = 0;
    }

    public turnOn(): void {
        this.status = true;
        this.indicatorLed = 'Green';
        console.log('Turning on the headphones...');
    }

    public turnOff(): void {
        this.status = false;
        this.indicatorLed = 'Red';
        console.log('Turning off the headphones...');
    }

    public changeVolume(volume: number): void {
        if (volume < 0 || volume > 100) {
            console.log('Volume cannot be lower than 0 and higher than 100');
        } else {
            this.volumeControl = volume;
            console.log('Volume changed to ' + this.volumeControl + '%');
        }
    }
}
