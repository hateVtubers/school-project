import Header from "../../container/Header";
import useData from "../../hook/useData";
import Image from "next/image";
import { Buttons } from "../../components/Buttons";
import PagesHead from "../../container/PagesHead"

const HololiveAlternative = () => {
  const { hololiveAlternative: { text, links } } = useData();
  return (
    <>
      <PagesHead></PagesHead>
      <Header></Header>
      <h1 className="text-center text-xl text-turquoise-blue-500 my-7 font-mono">
        Que es hololive alternative?
      </h1>
      <main className="px-10 text-center">
        <Image
          src="/e.webp"
          alt="a"
          layout="intrinsic"
          className="bg-cover bg-center mx-auto"
          width={1000}
          height={500}
          priority={true}
        />
        <p className="my-3">{text}</p>
        <div className="flex gap-5 items-center justify-center">
          {links.map((i) => (
            <Buttons color={i.color} title={i.title} url={i.url} key={i.title} />
          ))}
        </div>
      </main>
    </>
  );
};

export default HololiveAlternative;
