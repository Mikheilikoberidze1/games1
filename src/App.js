import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Hangman from './component/hangman';
import Luckywheel from './component/luckywheel';
import Redorblack from './component/redorblack';
import Home from './component/home';
import './App.css';
import Navigationbar from './component/navigationbar';

  
class App extends Component {
  render() {
    return (
       <Router>
         <div>
         <Navigationbar />
           <Routes>
           <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/hangman' element={< Hangman />}></Route>
                 <Route exact path='/redorblack' element={< Redorblack />}></Route>
                 <Route exact path='/luckywheel' element={< Luckywheel />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
  
export default App;