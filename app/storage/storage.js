import id_generator from "uuid/v4";
import random_name from "node-random-name";

class Storage {
    constructor(props) {};

    human_generator = () => {
        return [...Array(100).keys()].map(() => ({
            id: id_generator(),
            name: random_name({ random: Math.random }),
            age: Math.floor(Math.random() * 100),
            gender: ["Male", "Female"][Math.floor(Math.random() * 2)]
        }))
    }

    get = () => {
        const people = JSON.parse(localStorage.getItem("people"));
        if (!people || people.length === 0) {
            this.updateList(this.human_generator());
            return JSON.parse(localStorage.getItem("people"));
        }
        return people;
    }

    add = (newPerson) => {
        const currentPeople = this.get();
        newPerson.id = id_generator();
        const newPeople = currentPeople.concat([newPerson]);
        this.updateList(newPeople);
    }

    update = (updatedPerson) => {
        const newPeople = this.get().map(person => person.id === updatedPerson.id ? updatedPerson : person);
        this.updateList(newPeople);
    }

    delete = (id) => {
        const newPeople = this.get().filter(person => person.id !== id);
        this.updateList(newPeople);
    }

    updateList = (newList) => localStorage.setItem("people", JSON.stringify(newList));
}
export default new Storage();
