class Pass{
    constructor(vehicle){
        this.id = `pass-${(new Date()).getTime()}`
        this.vehicle = vehicle
    }

    print(e) {
        let ticket = `
            <h2>Pass</h2>
            <div>
                <label>Name :-</label>
                <label>${this.vehicle.owner.name}</label>
            </div>
            <div>
                <label>Vehicle Id :-</label>
                <label>${this.vehicle.idVehicle}</label>
            </div>
            <div>
                <label>Expiry :-</label>
                <label>${this.expiry}</label>
            </div>
            <div>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${this.expiry}" alt="QR Code" />
            </div>
        `
        document.querySelector('.ticket').innerHTML = ticket
    }
}

export default Pass