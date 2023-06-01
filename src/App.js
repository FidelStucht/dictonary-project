import "./App.css";
import image1 from "./image1.JPG";
import Dictonary from "./Dictonary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={image1} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictonary defaultKeyword="sun" />
        </main>
        <footer className="App-footer">coded by Fidelis</footer>
      </div>
    </div>
  );
}
