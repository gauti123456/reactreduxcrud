import {createStore} from 'redux'
import { crudReducer } from './crudReducer'

export const crudStore = createStore(crudReducer)