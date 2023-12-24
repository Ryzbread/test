import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import NavBar from './Components/NavBar';

function App() {

  let AppName = <>App Name</>
  
  return (
    <div>

      <Header appName = {AppName} />

      <div className="App-header">
          <NavBar appName = {AppName} />
      </div>

      <Footer/>

    </div>
  );
}

export default App;
