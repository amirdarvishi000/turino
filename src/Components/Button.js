const Button = ({ text, onClickk = () => {} }) => {
  return (
    <button
      type="button"
      onClick={onClickk}
      class="btn p-3 btn-primary w-100 btn-lg btn-block border-redius-default"
    >
      {text}
    </button>
  );
};
export default Button;
