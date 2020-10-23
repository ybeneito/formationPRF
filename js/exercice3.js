/* class person */

class Person {
    constructor(lastname, firstname) {
        this.lastname = lastname;
        this.firstname = firstname;
    }
    introduceMySelf() {
        console.log(`Hello my name is ${this.firstname} ${this.lastname}`);        
    }
}

/* Instanciation */
const bob = new Person("Lefevre", "Bob");
const toto = new Person("Blabla", "Toto");
const barbara = new Person("Martin", "Barbara");

bob.introduceMySelf();
barbara.introduceMySelf();
toto.introduceMySelf();

/* Class Teacher extends Person */
class Teacher extends Person {
    constructor(lastname, firstname, subject) {
        super(lastname, firstname);
        this.subject = subject;
    }
    teach() {
        console.log(`My main subject is: ${this.subject}`);
    }
    /* Surcharge de la méthode introduceMySelf */
    introduceMySelf() {
        super.introduceMySelf();
        console.log(`and i'm a teacher`);        
    }
}
const robert = new Teacher ("Lachaise", "Robert", "Math");
robert.introduceMySelf();
robert.teach();