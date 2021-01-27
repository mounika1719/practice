import {carconfiguration} from "./car-config";
export class Car{
    //properties
   carname: string;
    brand: string;
    color:string;
    transmission:boolean;
    makeyear: number;

    constructor(data:carconfiguration){
        this.carname=data.carvalue;
        this.brand=data.brandvalue;
         this.color=data.colorvalue;
        this.transmission=data.trans;
        this.makeyear=data.make
    }
    //methods
    carstart(){
        console.log("car has started");
    }
    carmoving(){
        console.log("car is moivng");

    }
    carstopped(){
        console.log("car is stopped");
    }
    getdata(){
        console.log(this.carname,this.brand,this.color,this.transmission);
    }
}