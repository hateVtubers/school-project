import useData from "../../hook/useData";
import Header from "../../container/Header";
import { TextCard } from "../../components/textCard";
import PagesHead from "../../container/PagesHead"

const Hololive = () => {
  const { whatIsHololive: { info } } = useData();
  return (
    <>
      <PagesHead></PagesHead>
      <Header></Header>
      <div
        className="w-full h-screen bg-cover bg-center a"
      >
        <main className="w-5/6 z-10 absolute left-0 bottom-0 right-0 mx-auto rounded-lg bg-rushia-body py-3">
          {info.map((e) => (
            <TextCard key={e[0]} title={e[0]} text={e[1]}></TextCard>
          ))}
        </main>
      </div>
      <style jsx>{`
        .a {
          background-image: url("/d.webp");
        }
      `}</style>
    </>
  );
};

export default Hololive;
