import './App.css';
import TaskListComponents from './components/container/task_list';
import Loginformik from './components/pure/form/loginFormik';
import Registerformik from './components/pure/form/registerFormik';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Componente de listado de Estado de Contacto */}
       {<TaskListComponents></TaskListComponents>}

       {/* <Loginformik></Loginformik> */}
       {/* <Registerformik></Registerformik> */}
      </header>
    </div>
  );
}

export default App;
