export const Buttons = ({ color, title, url }) => {
  return (
    <>
      <button className={`border-${color} border px-5 py-1 text-${color} rounded hover:shadow-xl transition duration-500 ease-in-out hover:bg-${color} hover:text-white`}>
        <a href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
      </button>
    </>
  );
};
