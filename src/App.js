import logo from './logo.svg';
import './Contact.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import Footer from './Footer';
import Todo from './Todo';
 


function App() {
  return (
<>
<Navbar/>

<Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/about" component={About} />
  <Route exact path="/service" component={Service} />
  <Route exact path="/contact" component={Contact} />
  <Route exact path="/todo" component={Todo} />
  <Redirect to="/" />
  {/* <Route component={Error} /> */}
</Switch>

<Footer />

</>
  );
}

export default App;
