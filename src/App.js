import { useEffect } from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import Statepage from './pages/home/StatePage';

import Notfoundpage from './pages/404/NotFountPage';
import Taskspage from './pages/tasks/TasksPage';
import Loginpage from './pages/auth/LoginPage';
import LogoutPage from './pages/auth/LogoutPage';


function App() {

  let logged = false;

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged?', logged)
  }, [])


  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>|| HOME |</Link>
          
          <Link to='/login'>| Login |</Link>
          <Link to='/registro'>| Registro |</Link>

          <Link to='/task/1'>| Task ||</Link>
        </aside>

        <main>
          <Switch> 
            <Route exact path='/' component={ HomePage } />
            <Route exact path='/online-state' component={ Statepage } />
            <Route path='/login' component= { Loginpage }>
              {
                  logged ? 
                    () => {
                      alert('You are logged in. Redirecting to home...')
                      return (<Redirect to='/'/>)
                    }
                  :
                  () => {
                    return (<Loginpage></Loginpage>)
                  }
              }
            </Route>
            <Route path='/registro' component={ LogoutPage } />
            <Route path='/tasks' component={ Taskspage } />
            {/* 404 - Page No Found */}
            <Route component={ Notfoundpage } />
          </Switch>
        </main>

      </div>

    </Router>
  );
}

export default App;
