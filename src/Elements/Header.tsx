const Header = () => {
  const handleOpen = () => {
    document.getElementById("mobileMenu")?.classList.toggle("opacity-0");
    document.getElementById("mobileMenu")?.classList.toggle("-z-30");
    document.getElementById("mobileMenu")?.classList.toggle("z-30");
  };

  return (
    <header className="flex bg-[#3dbeff] z-10 text-white py-8 px-12 w-screen items-center sm:px-6">
      <img src="./logo.svg" alt="logo" />
      <nav className="flex gap-12 ml-auto text-xs items-center sm:hidden">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <button className="px-8 py-3 rounded-full bg-white text-very-dark-desaturated-blue hover:bg-[#72cefd] hover:text-white transition-colors">
          <h1>CONTACT</h1>
        </button>
      </nav>
      <img
        src="./icon-hamburger.svg"
        alt="icon hamburger"
        className="ml-auto hidden sm:block"
        onClick={handleOpen}
      />
    </header>
  );
};

export default Header;
