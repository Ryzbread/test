import './App.css';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';

function App() {

  let AppName = <>App Name</>
  
  return (
    <div>

      <Navigation appName = {AppName} />

      <Footer/>

    </div>
  );
}

export default App;
