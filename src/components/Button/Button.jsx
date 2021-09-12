export const Button = ({ onClick }) => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });

  return (
    <button type="button" onClick={onClick}>
      Load More
    </button>
  );
};
