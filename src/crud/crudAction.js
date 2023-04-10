import { ADD_USER, REMOVE_USER, UPDATE_USER } from "./crudTypes"


export const addUser = (user) => {
    return {
        type:ADD_USER,
        payload:user
    }
}

export const removeUser = (id) => {
    console.log(id)
    return {
        type:REMOVE_USER,
        payload:id
    }
}

export const updateUser = (id,name,age) => {
    return {
        type:UPDATE_USER,
        payload:{
            id,
            name,
            age
        }
    }
}