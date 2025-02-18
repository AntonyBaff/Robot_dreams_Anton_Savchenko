//import { getJson, Output, Links } from './interface';

import { Data, getJson } from "./interface";

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
};

(async () => {
    const output = await getJson();
    //console.log(output.data[1])
    const output2 = new OutputClass(output.data[1]);
    output2.shortInfo();
    //console.log(output.data[0].id);
})();