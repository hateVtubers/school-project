export const Loading = () => {
  return (
    <>
      <div className="loading"></div>
      <style jsx>{`
        .loading {
          border: 4px solid rgba(0, 0, 0, 0.1);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border-left-color: #5EDDEF;
          animation: a 1s ease infinite;
        }
        @keyframes a {
          0% {
            transfrom: rotate(0deg)
          }
          100% {
            transfrom: rotate(360deg)
          }
        }
      `}</style>
    </>
  );
};
