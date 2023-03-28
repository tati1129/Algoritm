

class Worker {
    constructor( id, age, salary, firstName, lastName){
        this.id = id;
        this.age = age;
        this.salary = salary;
        this.firstName = firstName;
        this.lastName = lastName;

        this.getInfo = () => {
            document.write(` id: ${this.id} firstName: ${firstName} lastName: ${lastName} <br>`);
        }
    }
}

class Repository{
    constructor(){
       this.storage = [];
       this.append = (item) => { this.storage.push(item)};
       this.printSorage = () => { this.storage.forEach(e => e.getInfo()) }; 
    }
}

let it = new Repository();
it.append(new Worker(1, 22, 1000, 'Tigran', 'Bo'));
it.append(new Worker(2, 3, 800, 'Antony', 'Sommers'));
it.append(new Worker(3, 27, 1000, 'Amanda', 'Jonatan'));

let qa = new Repository();
qa.append(new Worker(1, 29, 700, 'Jo', 'Black'));
qa.append(new Worker(2, 21, 600, 'Lena', 'Watsons'));
qa.append(new Worker(3, 26, 800, 'Tina', 'Lopes'));

it.printSorage();
document.write("____________________ <br>");
qa.printSorage();


/* 
id: 1 firstName: Tigran lastName: Bo
id: 2 firstName: Antony lastName: Sommers
id: 3 firstName: Amanda lastName: Jonatan
____________________
id: 1 firstName: Jo lastName: Black
id: 2 firstName: Lena lastName: Watsons
id: 3 firstName: Tina lastName: Lopes */