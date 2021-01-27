"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car_1 = require("./car");
var obj = { carvalue: 'cretra', brandvalue: 'audi', colorvalue: 'red', trans: true, make: 2021 };
var c = new car_1.Car(obj);
c.getdata();
