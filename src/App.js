import {GoogleOAuthProvider} from '@react-oauth/google'

//Components
import Messenger from "./components/Messenger"

function App() {

const clientId='980717338684-djt124kuqnp1pg2cs5afsd1bh5113mbm.apps.googleusercontent.com'

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger/>
    </GoogleOAuthProvider>    
  );
}

export default App;
