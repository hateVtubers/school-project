import Link from "next/link";

export const Card = ({ img, text, otherText, url }) => {
  return (
    <>
      <Link href={url} passHref>
        <div className="w-80 h-72 xl:w-4/12 xl:h-80 overflow-hidden rounded-md animation transition hover:shadow-hololive ease-linear duration-300">
          <div className="w-full h-full bg-cover a">
            <main className="w-full h-full z-10 bg-card flex flex-col items-center justify-center">
              <h1 className="text-sm font-mono bg-white rounded-sm px-4 mr-auto ml-4 mt-40 mix-blend-screen text-black uppercase xl:mt-48">
                {text}
              </h1>
              <p className="text-white text-xs px-5 mt-2 mr-auto">
                {otherText}
              </p>
            </main>
          </div>
        </div>
      </Link>
      <style jsx>{`
        .a {
          background-image: ${img};
        }
      `}</style>
    </>
  );
};

/* box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px; */
