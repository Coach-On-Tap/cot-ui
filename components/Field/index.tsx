import Tooltip from "@/components/Tooltip";
import Icon from "@/components/Icon";

type FieldColor =
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning"
  | string;

type FieldVariant = "filled" | "outlined" | "standard";

type FieldProps = {
  className?: string;
  classInput?: string;
  label?: string;
  innerLabel?: string;
  tooltip?: string;
  children?: React.ReactNode;
  textarea?: boolean;
  type?: string;
  validated?: boolean;
  color?: FieldColor;
  variant?: FieldVariant;
  handleForgotPassword?: () => void;
};

const Field = ({
  className,
  classInput,
  label,
  innerLabel,
  tooltip,
  children,
  textarea,
  type,
  validated,
  color = "primary",
  variant = "outlined",
  handleForgotPassword,
  ...inputProps
}: FieldProps &
  React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const getBorderClasses = () => {
    if (variant === "filled") {
      // Filled variant - background with subtle border
      let classes = "bg-b-surface3 border border-transparent";

      switch (color) {
        case "primary":
          classes += " hover:border-primary-400 focus:border-primary-500";
          break;
        case "secondary":
          classes += " hover:border-secondary-400 focus:border-secondary-500";
          break;
        case "success":
          classes += " hover:border-success-400 focus:border-success-500";
          break;
        case "warning":
          classes += " hover:border-warning-400 focus:border-warning-500";
          break;
        case "error":
          classes += " hover:border-error-400 focus:border-error-500";
          break;
        case "info":
          classes += " hover:border-primary-400 focus:border-primary-500";
          break;
        default:
          classes += ` hover:border-[${color}] focus:border-[${color}]`;
          break;
      }
      return classes;
    } else if (variant === "standard") {
      // Standard variant - no border, only bottom border
      let classes =
        "border-0 border-b border-s-stroke2 rounded-none bg-transparent";

      switch (color) {
        case "primary":
          classes += " hover:border-b-primary-400 focus:border-b-primary-500";
          break;
        case "secondary":
          classes +=
            " hover:border-b-secondary-400 focus:border-b-secondary-500";
          break;
        case "success":
          classes += " hover:border-b-success-400 focus:border-b-success-500";
          break;
        case "warning":
          classes += " hover:border-b-warning-400 focus:border-b-warning-500";
          break;
        case "error":
          classes += " hover:border-b-error-400 focus:border-b-error-500";
          break;
        case "info":
          classes += " hover:border-b-primary-400 focus:border-b-primary-500";
          break;
        default:
          classes += ` hover:border-b-[${color}] focus:border-b-[${color}]`;
          break;
      }
      return classes;
    } else {
      // Outlined variant (default) - current behavior
      let borderClasses = "border border-s-stroke2";

      switch (color) {
        case "primary":
          borderClasses += " hover:border-primary-400 focus:border-primary-500";
          break;
        case "secondary":
          borderClasses +=
            " hover:border-secondary-400 focus:border-secondary-500";
          break;
        case "success":
          borderClasses += " hover:border-success-400 focus:border-success-500";
          break;
        case "warning":
          borderClasses += " hover:border-warning-400 focus:border-warning-500";
          break;
        case "error":
          borderClasses += " hover:border-error-400 focus:border-error-500";
          break;
        case "info":
          borderClasses += " hover:border-primary-400 focus:border-primary-500";
          break;
        default:
          borderClasses += ` hover:border-[${color}] focus:border-[${color}]`;
          break;
      }
      return borderClasses;
    }
  };

  const getRoundedClasses = () => {
    if (variant === "standard") {
      return textarea ? "rounded-none" : "rounded-none";
    }
    return textarea ? "rounded-3xl" : "rounded-full";
  };

  const getIconColor = () => {
    switch (color) {
      case "primary":
        return "fill-primary-500";
      case "secondary":
        return "fill-secondary-500";
      case "success":
        return "fill-success-500";
      case "warning":
        return "fill-warning-500";
      case "error":
        return "fill-error-500";
      case "info":
        return "fill-primary-500";
      default:
        return "fill-primary-500";
    }
  };

  return (
    <div className={`${innerLabel ? "pt-1.5" : ""} ${className || ""}`}>
      {label && !innerLabel && (
        <div className="flex items-center mb-4">
          <div className="text-button">{label}</div>
          {tooltip && <Tooltip className="ml-1.5" content={tooltip} />}
        </div>
      )}
      <div className={`relative ${textarea ? "text-0" : ""}`}>
        {innerLabel && !label && (
          <div className="absolute -top-2.5 left-6 px-1 bg-b-surface2 text-caption pointer-events-none">
            {innerLabel}
          </div>
        )}
        {handleForgotPassword && (
          <button
            className="absolute -top-2.5 right-6 px-1 bg-b-surface2 text-caption text-t-secondary transition-colors hover:text-t-primary"
            onClick={handleForgotPassword}
          >
            Forgot password?
          </button>
        )}
        {children}
        {textarea ? (
          <textarea
            className={`w-full h-24 px-4.5 py-3.5 text-body-2 text-t-primary outline-none transition-colors resize-none placeholder:text-t-secondary/50 ${getRoundedClasses()} ${getBorderClasses()} ${
              validated ? "pr-14" : ""
            } ${innerLabel ? "pl-6.5" : ""} ${classInput || ""}`}
            {...inputProps}
          ></textarea>
        ) : (
          <input
            className={`w-full h-12 px-4.5 text-body-2 text-t-primary outline-none transition-colors placeholder:text-t-secondary/50 ${getRoundedClasses()} ${getBorderClasses()} ${
              validated ? "pr-14" : ""
            } ${innerLabel ? "pl-6.5" : ""} ${classInput || ""}`}
            type={type || "text"}
            {...inputProps}
          />
        )}
        {validated && (
          <Icon
            className={`absolute top-1/2 right-5 -translate-y-1/2 ${getIconColor()}`}
            name="check"
          />
        )}
      </div>
      {/* <div className="mt-2 text-caption text-primary-03">
                Please enter an email address.
            </div> */}
    </div>
  );
};

export default Field;
