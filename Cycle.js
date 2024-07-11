import Vehicle from "./Vehicle.js"
class Cycle extends Vehicle{
    constructor(idVehicle,owner){
        super(idVehicle,owner)
        this.role = 'cycle'
        this.priceOption ={
            daily : '5',
            monthly : '50',
            yearly : '100'
        }
    }
    
}
export default Cycle