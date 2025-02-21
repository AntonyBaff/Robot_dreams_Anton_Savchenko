import { IAudioEquipment } from './iaudioequipment';

export class BluetoothHeadphones implements IAudioEquipment {
    private status: boolean;

    public get currentIndicator(): string {
        return this.indicatorLed;
    }

    public connectionType: string;

    public indicatorLed: string;

    public constructor() {
        this.status = false;
        this.indicatorLed = '';
        this.connectionType = 'bluetooth';
    }

    public turnOnHeadphones(): void {
        this.status = true;
        this.indicatorLed = 'Green';
        console.log('Turning on the headphones...');
    }

    public turnOffHeadphones(): void {
        this.status = false;
        this.indicatorLed = 'Red';
        console.log('Turning off the headphones...');
    }

    public changeVolume(volume: number): void {
        if (volume < 0 || volume > 100) {
            console.log('Volume cannot be lower than 0 and higher than 100');
        } else {
            const volumeControl = volume;
            console.log('Volume changed to ' + volumeControl + '%');
        }
    }
}
