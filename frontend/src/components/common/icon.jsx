import PropTypes from "prop-types";

export const Icon = ({ className, name, outlined, ...props }) => (
  // the file kept with "i" because of some compilation error
  <span
    className={`${className} material-icons ${
      outlined ? "material-icons-outlined" : ""
    }`}
    {...props}
  >
    {name}
  </span>
);

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  outlined: PropTypes.bool,
};
