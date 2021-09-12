import css from './Button.module.css';

export const Button = ({ onClick }) => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });

  return (
    <button className={css.Button} type="button" onClick={onClick}>
      Load More
    </button>
  );
};
