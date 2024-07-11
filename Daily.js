import Pass from "./Pass.js"

class Daily extends Pass{
    constructor(vehicle){
        super(vehicle)
        this.price = vehicle.role === 'bike' ? 10 : (vehicle.role === 'cycle' ? 5 : 50)
        let timeStamp = new Date()
        timeStamp.setDate(timeStamp.getDate() + 1)
        this.expiry = timeStamp
    }
}
export default Daily