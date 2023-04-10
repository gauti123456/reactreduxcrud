import './App.css'
import Users from './Users'
import { Provider } from 'react-redux'
import { crudStore } from './crud/crudStore'

function App() {

  return (
    <Provider store={crudStore}>
     <Users/>
    </Provider>
  )
}

export default App
