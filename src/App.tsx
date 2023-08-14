import Clients from "./Elements/Clients";
import Footer from "./Elements/Footer";
import Gallery from "./Elements/Gallery";
import Header from "./Elements/Header";
import Table from "./Elements/Table";
import Top from "./Elements/Top";

const App = () => {
  return (
    <main>
      <Header />
      <Top />
      <Table />
      <Clients />
      <Gallery />
      <Footer />
    </main>
  );
};

export default App;
