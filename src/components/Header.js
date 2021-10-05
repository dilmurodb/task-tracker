// import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title }) => {
  const onClick = () => {
    console.log("I just clicked");
  };
  return (
    <header className="header">
      <h1> {title}</h1>
      <Button color="green" text="hello" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task tracker default",
};
// Header.propTypes = {
//   title: PropTypes.string,
//   number: PropTypes.string.isRequired,
// };

// const headerStyle = {
//   color: "green",
//   backgroundColor: "silver",
// };
export default Header;
