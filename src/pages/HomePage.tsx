import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {}, []);

  return (
    <div id='home'>
      <div className='row text-center mt-5'>
        <div className='col'>
          <h2>Welcome to some really cool startup</h2>
          <h4 className='text-secondary'>
            Take a look at some of our other users!
          </h4>
        </div>
      </div>
      <div className='row text-center'>
        <div className='col-6 offset-3'>
          <ul className='list-group'>{/* Render Users in App */}</ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
