export interface IAudioEquipment {
    indicatorLed: string;
    connectionType: string;

    turnOnHeadphones(): void;
    turnOffHeadphones(): void;
    changeVolume(volume: number): void;
}
