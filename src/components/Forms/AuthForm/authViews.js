import Login from './Login'
import Register from './Register'
import ResetPassword from './ResetPassword'
import { AppRoutes } from '../../../routing/AppRoutes'

const authViews = {
  login: {
    header: 'Sign in',
    form: <Login />,
    switchText: 'Still without account?',
    switchLinkText: 'Create one',
    switchLinkPath: AppRoutes.REGISTER,
  },
  register: {
    header: 'Create an account',
    form: <Register />,
    switchText: 'Already have account?',
    switchLinkText: 'Log in',
    switchLinkPath: AppRoutes.LOGIN,
  },
  reset: {
    header: 'Forgot Password',
    form: <ResetPassword />,
    switchText: 'Still without account?',
    switchLinkText: 'Create one',
    switchLinkPath: AppRoutes.REGISTER,
  },
}

export default authViews
