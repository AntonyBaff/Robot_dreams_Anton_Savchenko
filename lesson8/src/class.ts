//import { getJson, Output, Links } from './interface';

import { Data} from './interface';

export class OutputClass {
    private _id;

    public get id(): string {
        return this._id;
    }

    public type: string;

    public data: Partial<Data>[] = [];
    protected links: Partial<{
        self: string;
        current: string;
        next: string;
        last: string;
    }> = {};

    public constructor(data: Data) {
        this._id = data.id;
        this.type = data.type;
    }

    public shortInfo(): void {
        console.log(this._id, this.type);
    }
}
