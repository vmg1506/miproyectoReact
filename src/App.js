import './App.scss';
import Contador from './componentes/Contador';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Main from './componentes/Main';



function App() {
  return (
    <div className="App">
        
        <Header />
        {/* <Contador /> */}
        <Main />
        <Footer />
    </div>
  );
}

export default App;

