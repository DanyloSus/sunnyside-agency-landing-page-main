interface ClientProps {
  img: string;
  text: string;
  name: string;
  status: string;
}

const Client = ({ img, text, name, status }: ClientProps) => {
  return (
    <div className="text-center flex-col flex justify-between items-center h-[350px] sm:h-[300px] max-w-[310px]">
      <img
        src={`./${img}`}
        alt={img}
        className="mx-auto w-[72px] h-[72px] rounded-full"
      />
      <p>{text}</p>
      <div>
        <h1>{name}</h1>
        <p className="text-xs text-grayish-blue mt-2">{status}</p>
      </div>
    </div>
  );
};

export default Client;
