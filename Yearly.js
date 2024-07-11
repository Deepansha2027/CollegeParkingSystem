import Pass from "./Pass.js"

class Yearly extends Pass{
    constructor(vehicle){
        super(vehicle)
        this.price = vehicle.role === 'bike' ? 1000 : (vehicle.role === 'cycle' ? 100 : 5000)
        let timeStamp = new Date()
        timeStamp.setFullYear(timeStamp.getFullYear() + 1)
        this.expiry = timeStamp
    }
}
export default Yearly