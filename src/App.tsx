import { useEffect } from "react";

import Clients from "./Elements/Clients";
import Footer from "./Elements/Footer";
import Gallery from "./Elements/Gallery";
import Header from "./Elements/Header";
import MobileMenu from "./Elements/MobileMenu";
import Table from "./Elements/Table";
import Top from "./Elements/Top";

const App = () => {
  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);

    reveal();
  }, []);

  return (
    <main>
      <Header />
      <MobileMenu />
      <Top />
      <Table />
      <Clients />
      <Gallery />
      <Footer />
    </main>
  );
};

export default App;
