var Car = /** @class */ (function () {
    function Car(data) {
        this.carname = data.carvalue;
        this.brand = data.brandvalue;
        this.color = data.colorvalue;
        this.transmission = data.trans;
        this.makeyear = data.make;
    }
    //methods
    Car.prototype.carstart = function () {
        console.log("car has started");
    };
    Car.prototype.carmoving = function () {
        console.log("car is moivng");
    };
    Car.prototype.carstopped = function () {
        console.log("car is stopped");
    };
    Car.prototype.getdata = function () {
        console.log(this.carname, this.brand, this.color, this.transmission);
    };
    return Car;
}());
var obj = { carvalue: 'cretra', brandvalue: 'audi', colorvalue: 'red', trans: true, make: 2021 };
var c = new Car(obj);
c.getdata();
