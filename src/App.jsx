import { HomePage, LoginPage, SignupPage, ForgotPage, DashboardPage, AccountPage, ActivationPage, Terms, PrivacyPolicy, BotsPage } from './pages';
import { Routes, Route, Navigate, BrowserRouter, useLocation } from 'react-router-dom';
import { UnauthenticatedLayout } from './components/Unauthenticated';
import { AuthenticatedLayout } from './components/Authenticated';
import { RequireAuth, AuthProvider, useIsAuthenticated } from 'react-auth-kit';


const App = () => {

  const PrivateRoute = ({ Component }) => {
    const isAuthenticated = useIsAuthenticated();
    const auth = isAuthenticated();
    return auth ? <Component /> : <Navigate to="/login" />;
  }

  const PublicRoute = ({ Component }) => {
    const location = useLocation();
    const from = location.state?.from.pathname || '/dashboard';
    const isAuthenticated = useIsAuthenticated();
    const auth = isAuthenticated();
    return auth ? <Navigate to={from} /> : <Component />;
  }
  
  return (
    <AuthProvider
      authType={'localstorage'}
      authName={'_auth'}
      cookieDomain={window.location.hostname}
      cookieSecure={false}
      refresh
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PublicRoute Component={UnauthenticatedLayout} />}>
            <Route index element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='signup' element={<SignupPage />} />
            <Route path='forgot' element={<ForgotPage />} />
            <Route path='activation' element={<ActivationPage />} />
            <Route path='terms' element={<Terms />} />
            <Route path='privacy' element={<PrivacyPolicy />} />
          </Route>

          <Route path='/' element={<PrivateRoute Component={AuthenticatedLayout} />}>
            <Route 
              path={'/dashboard'} 
              element={<RequireAuth loginPath='/login'><DashboardPage /></RequireAuth>}
            ></Route>

            <Route 
              path={'/account'}
              element={<RequireAuth loginPath='/login'><AccountPage /></RequireAuth>}
            ></Route>

            <Route 
              path={'/my-bots'} 
              element={<RequireAuth loginPath='/login'><BotsPage /></RequireAuth>}
            ></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
