import { FormEvent, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, Redirect } from 'react-router-dom';

const LoginPage = () => {
  const { error, loading, userLogin } = useContext(AuthContext);
  const [formData, setFormData] = useState<Creds>({
    email: '',
    password: '',
  });

  let token = localStorage.getItem('token');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    userLogin(formData);
  };

  if (token) {
    return <Redirect to='/home' />;
  }
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
              <input
                type='text'
                className='form-control'
                placeholder='Email'
                value={formData.email}
                onChange={e =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className='form-group my-3'>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
                value={formData.password}
                onChange={e =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <div className='d-grid'>
              <button
                className='btn btn-primary btn-block'
                disabled={loading}
                onClick={handleSubmit}>
                {loading ? (
                  <div
                    className='spinner-border spinner-border-sm'
                    role='status'>
                    <span className='visually-hidden'>Loading</span>
                  </div>
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </form>
          <div className='text-center text-danger mt-3'>{error}</div>
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
