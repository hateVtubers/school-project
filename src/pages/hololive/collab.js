import Header from "../../container/Header";
import useData from "../../hook/useData";
import Image from "next/image";
import PagesHead from "../../container/PagesHead";
import { Loading } from "../../components/Loading";
import holoGuardian from "../../../public/c.webp";

const Collab = () => {
  const { data, error } = useData();

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />;

  const { hololiveCollab: { text } } = data;

  return (
    <>
      <PagesHead></PagesHead>
      <Header></Header>
      <main>
        <h1 className="text-center text-xl text-turquoise-blue-500 my-7 font-mono">
          Hololive colaboraciones
        </h1>
        <div className="px-10 text-center">
          <h2>{text[0]}</h2>
          <p className="text-sm font-light mt-3">{text[1]}</p>
          <a
            href="https://twitter.com/hololivetv/status/1451443951483772930"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-turquoise-blue-600 ml-10 hover:underline"
          >
            official tweet
          </a>
          <div>
            <Image
              src={holoGuardian}
              alt="a"
              className="bg-cover bg-center mx-auto block"
              width={1000}
              height={500}
              placeholder="blur"
              priority={true}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Collab;
