const Table = () => {
  return (
    <section
      className="grid grid-cols-2 grid-rows-3 w-screen sm:flex flex-col"
      id="about"
    >
      <div className="flex justify-center items-center sm:py-10 text-center reveal">
        <div className="w-[300px] sm:w-[340px] flex flex-col  overflow-x-visible justify-between h-[200px]">
          <h1 className="text-3xl">Transform your brand</h1>
          <p className="text-xs sm:text-sm">
            We are full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <div className="cursor-pointer relative overflow-x-visible learn-more">
            <h1 className="text-xs uppercase z-20 relative">learn more</h1>
            <div className="absolute w-[100px] h-[7px] rounded-full bg-yellow -bottom-[2px] z-10 opacity-30 -left-[6px] sm:left-[120px] transition-opacity"></div>
          </div>
        </div>
      </div>
      <div className=" reveal">
        <img src="./desktop/image-transform.jpg" alt="image transform" />
      </div>
      <div className="sm:hidden reveal">
        <img src="./desktop/image-stand-out.jpg" alt="image stand out" />
      </div>
      <div className="flex justify-center items-center sm:hidden  reveal">
        <div className="w-[300px] flex flex-col  overflow-x-visible justify-between h-[200px]">
          <h1 className="text-2xl">Stand out to the right audience</h1>
          <p className="text-xs">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places
          </p>
          <div className="cursor-pointer relative overflow-x-visible learn-more">
            <h1 className="text-xs uppercase z-20 relative">learn more</h1>
            <div className="absolute w-[100px] h-[7px] rounded-full bg-soft-red -bottom-[2px] z-10 opacity-30 -left-[6px] transition-opacity"></div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center sm:block hidden text-center py-10  reveal">
        <div className="w-[340px] flex flex-col  overflow-x-visible justify-between h-[200px] mx-auto">
          <h1 className="text-3xl">Stand out to the right audience</h1>
          <p className="text-sm">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places
          </p>
          <div className="cursor-pointer relative overflow-x-visible learn-more">
            <h1 className="text-xs uppercase z-20 relative">learn more</h1>
            <div className="absolute w-[100px] h-[7px] rounded-full bg-soft-red -bottom-[2px] z-10 opacity-30 left-[120px] transition-opacity"></div>
          </div>
        </div>
      </div>
      <div className="sm:block hidden  reveal">
        <img src="./desktop/image-stand-out.jpg" alt="image stand out" />
      </div>
      <div className="relative text-graphic-design-text  reveal">
        <img
          src="./desktop/image-graphic-design.jpg"
          alt="image graphic design"
          className="absolute"
        />
        <div className="z-20 absolute bottom-8 text-center w-full flex items-center flex-col gap-5">
          <h1 className="text-xl">Graphic Design</h1>
          <p className="text-xs w-[250px]">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </p>
        </div>
      </div>
      <div className="relative text-photography-text  reveal">
        <img
          src="./desktop/image-photography.jpg"
          alt="image photography"
          className="absolute"
        />
        <div className="z-20 absolute bottom-8 text-center w-full flex items-center flex-col gap-5">
          <h1 className="text-xl">Photography</h1>
          <p className="text-xs w-[250px]">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Table;
