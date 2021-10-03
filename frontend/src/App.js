// Token -  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

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { HomeScreen } from './Screens/HomeScreen';
import ProductSc from './Screens/ProductSc';


function App() {
  return (
    <Router>
      <div className = "font-mono" >
    
        <Header/>
        <Route path = "/" component = {HomeScreen} exact />
        <Route path = "/product/:id" component = {ProductSc} exact />

        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
