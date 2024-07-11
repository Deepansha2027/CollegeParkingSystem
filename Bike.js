import Vehicle from "./Vehicle.js";

class Bike extends Vehicle{
    constructor(idVehicle,owner){
        super(idVehicle,owner)
        this.role = 'bike'
        this.priceOption ={
            daily : '10',
            monthly : '100',
            yearly : '1000'
        }
    }
}

export default Bike