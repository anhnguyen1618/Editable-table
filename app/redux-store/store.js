import { createStore, combineReducers } from 'redux';
import storage from "../storage/storage.js";

const sortBy = (sortBy = "name", action) => {
    return (action.type === "CHANGE_SORT_CATEGORY" ? action.sortBy : sortBy);
}

const sortOrder = (sortOrder = "ascending", action) => {
    return (action.type === "CHANGE_SORT_ORDER" ? action.sortOrder : sortOrder);
}

const people = (people = storage.get(), action) => {
    switch (action.type) {
        case "ADD_PEOPLE":
            storage.add(action.person);
            return storage.get();
        case "DELETE_PEOPLE":
            storage.delete(action.id);
            return storage.get();
        case "UPDATE_INFO":
            storage.update(action.updatedPerson);
            return storage.get();
        default:
            return people;
    }
}
const activePage = (activePage = 1, action) => {
    switch (action.type) {
        case "CHANGE_PAGE":
            return action.activePage;
        default:
            return activePage;
    }
}

const showConfirm = (showConfirm = false, action) => {
    switch (action.type) {
        case 'SHOW_CONFIRM':
            return true;
        case 'HIDE_CONFIRM':
            return false;
        default:
            return showConfirm;
    }
}

const idOfDeleteEntry = (idOfDeleteEntry = "", action) => {
    switch (action.type) {
        case 'ADD_ID':
            return action.id;
        default:
            return idOfDeleteEntry;
    }
}

const reducer = combineReducers({
    sortBy,
    sortOrder,
    people,
    activePage,
    showConfirm,
    idOfDeleteEntry
});

const store = createStore(reducer);

export default store;
