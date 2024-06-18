import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="bg-stone-950 cover">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
