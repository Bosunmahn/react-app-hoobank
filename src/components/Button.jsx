import styles from "../style";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`bg-blue-gradient font-poppins font-medium py-4 px-6 text-[18px] text-primary outline-none  ${styles} cursor-pointer rounded-[10px]`}
    >
      Get Started
    </button>
  );
};
export default Button;
