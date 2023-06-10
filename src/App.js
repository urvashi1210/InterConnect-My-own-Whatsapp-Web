import {GoogleOAuthProvider} from '@react-oauth/google'

//Components
import Messenger from "./components/Messenger"
import AccountProvider from "./context/AccountProvider"

function App() {

const clientId='980717338684-djt124kuqnp1pg2cs5afsd1bh5113mbm.apps.googleusercontent.com'

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>    
  );
}

export default App;
