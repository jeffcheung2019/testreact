import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  return (
    <div className="App">


      <Provider store={store}>
        <Page1 />
        {/* <Page2 /> */}
        <Page3/>
      </Provider>
      
    </div>
  );
}

export default App;

// Redis use case : verification code for login
// POST /login with userid : 36482 and password , with verification code =103842
// save redis row 
// {
//     "36482": "103842"
// }

// POST /login/verify-code : 103842, userId = 36482
// Check redis if it has userId = 36482
// {
//     "36482": "103842"
// }



// Generate pdf report 

// Database A
// Database B
// Database C

// Message broker A
// {
//   "pdf-1234": "user-A1,buyrecord-B1,address-C1"
// }
// {
//   "pdf-1235": "user-A2,buyrecord-B2,address-C2"
// }

// Backend server A (for trigger pdf generate job) : publisher
// Backend server B (for generate pdf report) : subscriber

// frontend server A


