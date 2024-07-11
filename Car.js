import Vehicle from "./Vehicle.js";

class Car extends Vehicle{
    constructor(idVehicle,owner){
        super(idVehicle,owner)
        this.role = 'car'
        this.priceOption ={
            daily : '50',
            monthly : '500',
            yearly : '5000'
        }
    }
}

export default Car