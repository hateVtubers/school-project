export const Card = ({ img, text, otherText }) => {
  return (
    <>
      <div className="w-80 h-72 overflow-hidden rounded-sm">
        <div className="w-full h-full bg-cover a bg-center transition-all">
          <div className="w-full h-full z-10 bg-card flex flex-col items-center justify-center">
            <h1 className="text-sm font-mono bg-white rounded-sm px-4 mr-auto ml-4 mt-40 mix-blend-screen text-black uppercase">
              {text}
            </h1>
            <p className="text-white text-xs px-5 mt-2">{otherText}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .a {
          background-image: ${img};
        }
      `}</style>
    </>
  );
};

/* box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px; */
