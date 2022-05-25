import './App.css';
import Weather from "./Weather";
import Footer from "./Footer";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Los Angeles" />
        <br></br>
        <Footer />
      </div>
    </div>
  );
}

