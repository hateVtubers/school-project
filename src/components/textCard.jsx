export const TextCard = ({ text, title }) => {
  return (
    <>
      <h1 className="text-center py-3 text-rushia-title xl:text-lg">{title}</h1>
      <p className="px-5 text-rushia-text-body">{text}</p>
    </>
  );
};
