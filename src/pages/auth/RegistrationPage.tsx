import { useState, useEffect, FormEvent, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const { alert, saveUser } = useContext(GlobalContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let user = {
      firstName,
      lastName,
      email,
      password,
    };
    saveUser(user);
  };

  return (
    <div id='home'>
      <div className='row my-5 text-center'>
        <div className='col'>
          <h1>Register Now to Join our App!</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          {alert ? (
            <div className='alert alert-primary' role='alert'>
              Saved!
            </div>
          ) : (
            ''
          )}

          <form action=''>
            <div className='form-group my-3'>
              <input
                type='text'
                className='form-control'
                placeholder='First Name'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
            <div className='form-group my-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Last Name'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
            <div className='form-group my-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className='form-group my-3'>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className='d-grid'>
              <button
                className='btn btn-primary btn-block'
                onClick={handleSubmit}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='row my-3 text-center'>
        <div className='col-sm-12 col-md-6 offset-md-3'>
          <div>
            Already registered?{' '}
            <Link to='/auth/login'>Click here to Login!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
