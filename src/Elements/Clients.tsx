import Client from "./Clients/Client";

const Clients = () => {
  return (
    <section
      className="h-screen sm:h-auto sm:py-10 w-screen flex flex-col justify-around items-center"
      id="services"
    >
      <h1 className="text-grayish-blue tracking-[3px] sm:mb-10">
        CLIENT TESTIMONIALS
      </h1>
      <div className="flex gap-10 px-10 sm:flex-col">
        <Client
          img="image-emily.jpg"
          text="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          name="Emily R."
          status="Marketing director"
        />
        <Client
          img="image-thomas.jpg"
          text="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
          name="Thomas S."
          status="Chief Operating Officer"
        />
        <Client
          img="image-jennie.jpg"
          text="Incredible end results! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          name="Jennie F."
          status="Business Owner"
        />
      </div>
    </section>
  );
};

export default Clients;
