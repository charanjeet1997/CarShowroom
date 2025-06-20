import type {ColorData} from "./Data.ts";

export interface CarData
{
    id: number;
    name: string;
    modelPath: string;
    Colors: ColorData[];
}

export class CarDataHandler{

    data: CarData[] = [];

    AddCarData(carData: CarData) : void
    {
        if(this.data == null) this.data = [];
        carData.id = this.data.length;
        this.data.push(carData);
    }

    RemoveCardData(carData: CarData) : void
    {
        if(this.data.find(x => x.id == carData.id))
        {
            const index = this.data.findIndex(x => x.id == carData.id);
            delete this.data[index];
        }
    }

    GetCarData(id: number): CarData
    {
        return this.data[id];
    }

}

