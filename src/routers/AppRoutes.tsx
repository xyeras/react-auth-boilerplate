import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LoginPage from '../pages/auth/LoginPage';
import RegistrationPage from '../pages/auth/RegistrationPage';
import HomePage from '../pages/HomePage';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/auth/register' component={RegistrationPage} />
          <Route exact path='/auth/login' component={LoginPage} />
          <PrivateRoute exact path='/home' component={HomePage} />
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default AppRoutes;
