import PropTypes from "prop-types";

export const Icon = ({ className, name, outlined, ...props }) => (
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
