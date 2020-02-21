// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){

    }

    getId(){

    }

    getEmail(){
        
    }

    getRole(){
        return "Employee";
    }
    
    printInfo() {
        for (let key in this){
            console.log(`${key}: ${this[key]}`)
        }
    }
}

module.exports = Employee;