import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import Card from "./Components/Card";
import Home from "./Routes/Home";
function App() {
  return (
      <div className="App">
          <Navbar/>
          <Form />
          {/* <Card /> */}
          <Home />
          <Footer/>
      </div>
  );
}

export default App;
