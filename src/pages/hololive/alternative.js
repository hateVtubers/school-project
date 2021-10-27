import Header from "../../container/Header";
import useData from "../../hook/useData";
import { Loading } from "../../components/Loading";
import { Buttons } from "../../components/Buttons";
import PagesHead from "../../container/PagesHead";

const HololiveAlternative = () => {
  const { data, error } = useData();

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />;

  const { hololiveAlternative: { links, text } } = data;
  return (
    <>
      <PagesHead></PagesHead>
      <Header></Header>
      <h1 className="text-center text-xl text-turquoise-blue-500 my-7 font-mono">
        Que es hololive alternative?
      </h1>
      <main className="px-10 text-center">
        <center>
          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/3RxlzJWWzdY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </center>
        <p className="my-3">{text}</p>
        <div className="flex gap-5 items-center justify-center">
          {links.map((i) => (
            <Buttons
              color={i.color}
              title={i.title}
              url={i.url}
              key={i.title}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default HololiveAlternative;
