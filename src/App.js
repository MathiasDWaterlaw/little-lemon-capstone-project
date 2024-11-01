import Nav from "./components/Nav";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className='grid-system'>
      <Nav />

      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
