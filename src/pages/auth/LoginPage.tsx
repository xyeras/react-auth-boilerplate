import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div id='login'>
      <div className='row my-5 text-center'>
        <div className='col'>
          <h1>Login to get started!</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-md-6 offset-md-3'>
          <form action=''>
            <div className='form-group my-3'>
              <input type='text' className='form-control' placeholder='Email' />
            </div>
            <div className='form-group my-3'>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
              />
            </div>
            <div className='d-grid'>
              <button
                className='btn btn-primary btn-block'
                onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='row my-3 text-center'>
        <div className='col-sm-12 col-md-6 offset-md-3'>
          <div>
            Don't have an account?{' '}
            <Link to='/auth/register'>Click here to Register!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
