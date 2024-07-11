import Faculty from "./user/Faculty.js"
import Learner from "./user/Learner.js"
import Bike from "./vehicle/Bike.js"
import Car from "./vehicle/Car.js"
import Cycle from "./vehicle/Cycle.js"
import Daily from "./pass/Daily.js"
import Monthly from "./pass/Monthly.js"
import Yearly from "./pass/Yearly.js"

const users = []
const vehicles = []

document.addEventListener('DOMContentLoaded',() => {
    const name = document.getElementById('name')
    const contact = document.getElementById('contact')
    const role = document.getElementById('role')
    const saveUserBtn = document.getElementById('saveUserBtn')
    saveUserBtn.addEventListener('click', e => {
        e.preventDefault()
        const user = role.value === 'learner' ? new Learner(name.value, contact.value) : new Faculty(name.value, contact.value)
        console.log(user);
        users.push(user)        
        /*alert(JSON.stringify(vehicle)) (alert takes single parameter)*/
        alert(`Congrats ! ${user.name} for successful registration . `)
        document.querySelector('.user').style.display = 'none'

        const idVehicle = document.getElementById('idVehicle')
        const roleVehicle = document.getElementById('roleVehicle')
        const saveVehicleBtn = document.getElementById('saveVehicleBtn')

        saveVehicleBtn.addEventListener('click', e => {
            e.preventDefault()
            let vehicle = null
            switch(roleVehicle.value){
                case 'cycle':
                    vehicle = new Cycle(idVehicle.value, user)
                break;
                case 'bike':
                    vehicle = new Bike(idVehicle.value, user)
                break;
                case 'car':
                    vehicle = new Car(idVehicle.value, user)
                break
            }
            console.log(vehicle);
            
        /*alert(JSON.stringify(vehicle)) (alert takes single parameter)*/
        alert(`Congrats ! vehicle registration is successfully done by id ${vehicle.idVehicle}. ` )
            document.querySelector('.vehicle').style.display = 'none'

            const passChoiceForm = document.querySelector('.pass-choice')

            const dailyPass = new Daily(vehicle)
            const dailyPassBtn = document.createElement('INPUT')
            dailyPassBtn.setAttribute('type', 'button')
            dailyPassBtn.setAttribute('value', `Daily : ${dailyPass.price}`)
            passChoiceForm.appendChild(dailyPassBtn)
            dailyPassBtn.addEventListener('click', () => {
                dailyPass.print()
            })

            const monthlyPass = new Monthly(vehicle)
            const monthlyPassBtn = document.createElement('INPUT')
            monthlyPassBtn.setAttribute('type', 'button')
            monthlyPassBtn.setAttribute('value', `Monthly : ${monthlyPass.price}`)
            passChoiceForm.appendChild(monthlyPassBtn)
            monthlyPassBtn.addEventListener('click', () => {
                monthlyPass.print()
            })

            const yearlyPass = new Yearly(vehicle)
            const yearlyPassBtn = document.createElement('INPUT')
            yearlyPassBtn.setAttribute('type', 'button')
            yearlyPassBtn.setAttribute('value', `Yearly : ${yearlyPass.price}`)
            passChoiceForm.appendChild(yearlyPassBtn)
            yearlyPassBtn.addEventListener('click', () => {
            yearlyPass.print()
            })

        })
        
    })
})