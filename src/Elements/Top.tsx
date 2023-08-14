const Top = () => {
  return (
    <section className="relative w-screen text-center h-screen">
      <img
        src="./desktop/image-header.jpg"
        alt="image header"
        className="w-screen absolute -z-10 h-[calc(100% - 104px)] object-cover h-screen"
      />
      <h1 className="text-white uppercase relative h-full text-3xl tracking-[5px]">
        we are creatives
      </h1>
      <img
        src="./icon-arrow-down.svg"
        alt="icon arrow down"
        className="mx-auto animate-bounce absolute z-10 bottom-[200px] left-[50%]"
      />
    </section>
  );
};

export default Top;
