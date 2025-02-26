import { IAudioEquipment } from './iaudioequipment';


export interface SpeakersCatalog {
    price: number;
    name: string;
    id: number;
}

export class Speakers implements IAudioEquipment {
    private status: string;
    private volumeControl: number;

    public get currentIndicator(): string {
        return this.indicatorLed;
    }

    public connectionType: string;
    public indicatorLed: string;

    public constructor() {
        this.status = '';
        this.indicatorLed = '';
        this.connectionType = 'wired';
        this.volumeControl = 0;
    }

    public turnOn(): void {
        this.status = 'ON';
        this.indicatorLed = 'Green';
        console.log('Speakers are ON');
    }

    public turnOff(): void {
        this.status = 'OFF';
        this.indicatorLed = 'Red';
        console.log('Speakers are OFF');
    }

    public changeVolume(volume: number): void {
        if (volume < 0 || volume > 100) {
            console.log('Volume cannot be lower than 0 and higher than 100');
        } else {
            const volumeControl = volume;
            console.log('Volume changed to ' + volumeControl + '%');
        }
    }

    public updateSpeakersPrice(user: SpeakersCatalog, newPrice: number): SpeakersCatalog{
        return { ...user, price: newPrice };
    }
}
