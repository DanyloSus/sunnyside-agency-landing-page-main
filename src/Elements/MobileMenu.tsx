const MobileMenu = () => {
  const handleClose = () => {
    document.getElementById("mobileMenu")?.classList.toggle("opacity-0");
    document.getElementById("mobileMenu")?.classList.toggle("-z-30");
    document.getElementById("mobileMenu")?.classList.toggle("z-30");
  };

  return (
    <div
      className="triangle-container z-30 overflow-visible overflow-x-visible py-10 transition-opacity"
      id="mobileMenu"
    >
      <nav className="flex flex-col text-lg items-center justify-around h-full">
        <a href="#about" onClick={handleClose}>
          About
        </a>
        <a href="#services" onClick={handleClose}>
          Services
        </a>
        <a href="#projects" onClick={handleClose}>
          Projects
        </a>
        <button className="px-8 py-4 rounded-full bg-yellow text-very-dark-desaturated-blue hover:bg-[#72cefd] hover:text-white transition-colors">
          <h1>CONTACT</h1>
        </button>
      </nav>
    </div>
  );
};

export default MobileMenu;
