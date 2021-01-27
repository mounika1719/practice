import {Car} from"./car";
import {carconfiguration} from "./car-config";
let obj: carconfiguration={carvalue:'cretra',brandvalue:'audi',colorvalue:'red',trans:true,make:2021};
let c=new Car(obj);
c.getdata();