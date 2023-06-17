import PropTypes from "prop-types";
import { Icon } from "./icon";

export const InputField = ({
  label,
  name,
  type,
  value,
  rows,
  onChange,
  placeholder,
  error,
  className,
  inputClassName,
  icon,
  ...rest
}) => {
  const textarea = type === "textarea";
  const resolvedInputClassName = [
    "w-full",
    "bg-[#F6F8FA]",
    "outline-none",
    "rounded-none",
    "outline-offset-0",
    textarea ? "h-auto" : "h-[50px]",
    "focus:outline-1",
    "focus:outline-slate-300",
    error ? "border border-red-500" : "",
    icon ? "pl-11 pr-4" : "px-4",
    textarea ? "py-3" : "",
    inputClassName,
  ].join(" ");

  let input;
  if (textarea) {
    input = (
      <textarea
        id={name}
        type={type}
        name={name}
        value={value || ""}
        rows={rows}
        onChange={onChange}
        placeholder={placeholder}
        className={resolvedInputClassName}
        {...rest}
      />
    );
  } else {
    input = (
      <input
        id={name}
        type={type}
        name={name}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        className={resolvedInputClassName}
        {...rest}
      />
    );
  }

  return (
    <div className={`${className} grid gap-1`}>
      {label && (
        <label className="text-sm" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="relative w-full">
        {input}
        {icon && (
          <>
            <div className={"absolute top-0 flex items-center h-full pl-3"}>
              <Icon name={icon} />
            </div>
          </>
        )}
      </div>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  rows: PropTypes.number,
};

InputField.defaultProps = {
  icon: null,
  type: "text",
  value: "",
  onChange: () => {},
  placeholder: "",
  error: "",
  className: "",
  inputClassName: "",
  rows: 5,
};
