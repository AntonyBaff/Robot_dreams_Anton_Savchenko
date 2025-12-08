export interface IAudioEquipment {
    indicatorLed: string;
    connectionType: string;
    //volume: number;

    turnOn(): void;
    turnOff(): void;

    changeVolume(volume: number): void;

}
