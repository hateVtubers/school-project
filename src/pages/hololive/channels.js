import useFilter from "../../hook/useFilter";
import Image from "next/image";
import Header from "../../container/Header";
import PagesHead from "../../container/PagesHead"

const Generation = ({ holoApi }) => {
  const generationsJP = [
    41, 39, 12, 46, 5, 1, 13, 24, 21, 15, 30, 10, 33, 14, 43, 36, 27, 38, 26,
    44, 29, 25, 45, 2, 31879, 31880, 31881, 31882, 31883,
  ];
  const [filterJP] = useFilter(holoApi, generationsJP);

  return (
    <>
      <PagesHead></PagesHead>
      <Header></Header>
      <main>
        <h1 className="text-lg mt-24 px-10 text-shadow-strong-title text-white">
          Idols channels:
        </h1>
        <div className="flex flex-wrap items-center gap-5 justify-center px-10">
          {filterJP.map((e) => (
            <div key={e.name} className="w-48 h-72 rounded hover:shadow-xl">
              <Image
                src={e.photo}
                alt="a"
                layout="fixed"
                className="bg-cover bg-center rounded-t"
                width="192%"
                height="192%"
                priority={true}
              />
              <h2 className="text-center text-shadow-other-text text-white">
                {e.name}
              </h2>
              <div className="flex items-center mt-3 gap-2 justify-evenly">
                <button className="py-1 px-4 text-white bg-red-500 text-xs">
                  <a href={`https://www.youtube.com/channel/${e.yt_channel_id}`} target="_blank" rel="noreferrer">
                    Youtube channels
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.holotools.app/v1/channels?offset=0&limit=50"
  ).then((r) => r.json());
  const r = await fetch(
    "https://api.holotools.app/v1/channels?offset=50&limit=19"
  ).then((r) => r.json());

  const holoApi = [...res.channels, ...r.channels];

  return {
    props: {
      holoApi,
    },
  };
};

export default Generation;
/* Her full name is ███████ Irys */
