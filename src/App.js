import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import MFASetup from './components/MFASetup';
import ForgotPassword from './components/ForgotPassword';
import AdminApproval from './components/AdminApproval';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/mfa-setup" component={MFASetup} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/admin-approval" component={AdminApproval} />
            </Switch>
        </Router>
    );
}

export default App;
