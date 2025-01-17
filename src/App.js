import React from 'react';
import 'assets/scss/style.scss'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import LandingPage from 'pages/LandingPage';
import DetailsPage from 'pages/DetailPage';
import Example from 'pages/Example'
import Checkout from 'pages/Checkout'

function App() {
  return (
    <div className="App">
      <Router>
       <Route exact path="/" component={LandingPage}/>
       <Route exact path="/example" component={Example}/>
       <Route exact path="/properties/:id" component={DetailsPage}/>
       <Route exact path="/checkout" component={Checkout}/>
     </Router> 
     
    </div>
  );
}

export default App;
