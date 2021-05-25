import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routers/AppRoutes';
import { GlobalProvider } from './context/GlobalContext';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <Router>
          <AppRoutes />
        </Router>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default App;
