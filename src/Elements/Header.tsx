const Header = () => {
  return (
    <header className="flex bg-[#3dbeff] z-10 text-white py-8 px-12 w-screen items-center">
      <img src="./logo.svg" alt="logo" />
      <nav className="flex gap-12 ml-auto text-xs items-center">
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Projects</a>
        <button className="px-8 py-3 rounded-full bg-white text-black hover:bg-[#72cefd] hover:text-white transition-colors">
          <h1>CONTACT</h1>
        </button>
      </nav>
    </header>
  );
};

export default Header;
