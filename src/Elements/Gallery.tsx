const Gallery = () => {
  return (
    <section
      className="grid grid-cols-4 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2"
      id="projects"
    >
      <img
        src="./desktop/image-gallery-milkbottles.jpg"
        alt="image gallery milkbottles"
      />
      <img
        src="./desktop/image-gallery-orange.jpg"
        alt="image gallery orange"
      />
      <img src="./desktop/image-gallery-cone.jpg" alt="image gallery cone" />
      <img
        src="./desktop/image-gallery-sugarcubes.jpg"
        alt="image gallery sugarcubes"
      />
    </section>
  );
};

export default Gallery;
