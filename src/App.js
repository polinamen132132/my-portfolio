import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Skills } from "./components/Skills";
import { Qualifications } from "./components/Qualifications";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { ContactMe } from "./components/ContactMe";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="main">
        <Home />
        <Qualifications />
        <Skills />
        <Services />
        <Portfolio />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
