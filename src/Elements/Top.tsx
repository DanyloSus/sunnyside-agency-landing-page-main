const Top = () => {
  return (
    <section className="relative w-screen text-center h-[calc(100vh-88px)]">
      <img
        src="./desktop/image-header.jpg"
        alt="image header"
        className="w-screen absolute -z-10 h-[calc(100% - 104px)] object-cover h-screen sm:hidden"
      />
      <img
        src="./mobile/image-header.jpg"
        alt="image header"
        className="w-screen absolute -z-10 h-full object-cover"
      />
      <h1 className="text-white uppercase relative h-full text-3xl tracking-[5px] sm:text-5xl">
        we are creatives
      </h1>
      <a href="#about">
        <img
          src="./icon-arrow-down.svg"
          alt="icon arrow down"
          className="mx-auto animate-bounce absolute z-10 bottom-[200px] left-[50%]"
        />
      </a>
    </section>
  );
};

export default Top;
