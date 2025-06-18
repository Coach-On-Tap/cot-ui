import Icon from "@/components/Icon";

type ButtonVariant = "filled" | "outline" | "ghost" | "text";
type ButtonColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "gray"
  | "dark";

type Props = {
  className?: string;
  icon?: string;
  children?: React.ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  isCircle?: boolean;
  isLoading?: boolean;
};

type ButtonProps = Props &
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" })
    | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" })
    | ({ as: "link"; href: string } & Omit<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        "href"
      >)
  );

const Button: React.FC<ButtonProps> = ({
  className,
  icon,
  children,
  variant = "filled",
  color = "primary",
  isCircle,
  isLoading = false,
  as = "button",
  ...props
}) => {
  const getButtonClasses = () => {
    const baseClasses =
      "inline-flex items-center justify-center h-12 border rounded-3xl text-button transition-all cursor-pointer disabled:pointer-events-none";

    const sizeClasses = isCircle ? "w-12 !px-0 rounded-full" : "px-6.5";

    let variantClasses = "";

    if (variant === "filled") {
      switch (color) {
        case "primary":
          variantClasses =
            "bg-b-primary border-0 text-white fill-white hover:bg-primary-600 disabled:bg-primary-300";
          break;
        case "secondary":
          variantClasses =
            "bg-b-secondary border-0 text-white fill-white hover:bg-secondary-600 disabled:bg-secondary-300";
          break;
        case "success":
          variantClasses =
            "bg-b-success border-0 text-white fill-white hover:bg-success-600 disabled:bg-success-300";
          break;
        case "warning":
          variantClasses =
            "bg-b-warning border-0 text-white fill-white hover:bg-warning-600 disabled:bg-warning-300";
          break;
        case "error":
          variantClasses =
            "bg-b-error border-0 text-white fill-white hover:bg-error-600 disabled:bg-error-300";
          break;
        case "gray":
          variantClasses =
            "bg-b-surface1 border-transparent text-t-secondary fill-t-secondary hover:text-t-primary hover:fill-t-primary hover:shadow-depth dark:bg-shade-04";
          break;
        case "dark":
          variantClasses =
            "relative bg-linear-to-b from-[#2C2C2C] to-[#282828] shadow-[inset_2px_0px_8px_2px_rgba(248,248,248,0.20)] border-0 text-t-light fill-t-light !transition-all after:absolute after:inset-0 after:border-[1.5px] after:border-white/20 after:rounded-3xl after:[mask-image:linear-gradient(to_top,transparent_0,black_100%)] hover:shadow-none dark:from-shade-10 dark:to-[#DEDEDE] dark:after:border-white/50 dark:after:shadow-[inset_2px_0px_8px_2px_rgba(24,24,24,0.25)] dark:after:transition-all dark:hover:text-shade-03 dark:hover:fill-shade-01 dark:hover:after:opacity-0";
          break;
      }
    } else if (variant === "outline") {
      switch (color) {
        case "primary":
          variantClasses =
            "border-primary-500 text-primary-500 fill-primary-500 hover:bg-primary-500 hover:text-white hover:fill-white disabled:border-primary-300 disabled:text-primary-300";
          break;
        case "secondary":
          variantClasses =
            "border-secondary-500 text-secondary-500 fill-secondary-500 hover:bg-secondary-500 hover:text-white hover:fill-white disabled:border-secondary-300 disabled:text-secondary-300";
          break;
        case "success":
          variantClasses =
            "border-success-500 text-success-500 fill-success-500 hover:bg-success-500 hover:text-white hover:fill-white disabled:border-success-300 disabled:text-success-300";
          break;
        case "warning":
          variantClasses =
            "border-warning-500 text-warning-500 fill-warning-500 hover:bg-warning-500 hover:text-white hover:fill-white disabled:border-warning-300 disabled:text-warning-300";
          break;
        case "error":
          variantClasses =
            "border-error-500 text-error-500 fill-error-500 hover:bg-error-500 hover:text-white hover:fill-white disabled:border-error-300 disabled:text-error-300";
          break;
        case "gray":
          variantClasses =
            "border-s-stroke2 text-t-secondary fill-t-secondary hover:border-s-highlight hover:text-t-primary hover:fill-t-primary disabled:border-transparent";
          break;
      }
    } else if (variant === "ghost") {
      switch (color) {
        case "primary":
          variantClasses =
            "border-transparent text-primary-500 fill-primary-500 hover:bg-primary-100 disabled:text-primary-300";
          break;
        case "secondary":
          variantClasses =
            "border-transparent text-secondary-500 fill-secondary-500 hover:bg-secondary-100 disabled:text-secondary-300";
          break;
        case "success":
          variantClasses =
            "border-transparent text-success-500 fill-success-500 hover:bg-success-100 disabled:text-success-300";
          break;
        case "warning":
          variantClasses =
            "border-transparent text-warning-500 fill-warning-500 hover:bg-warning-100 disabled:text-warning-300";
          break;
        case "error":
          variantClasses =
            "border-transparent text-error-500 fill-error-500 hover:bg-error-100 disabled:text-error-300";
          break;
        case "gray":
          variantClasses =
            "border-transparent text-t-secondary fill-t-secondary hover:bg-b-surface2 hover:text-t-primary hover:fill-t-primary";
          break;
      }
    } else if (variant === "text") {
      switch (color) {
        case "primary":
          variantClasses =
            "border-transparent text-primary-500 fill-primary-500 hover:text-primary-600 disabled:text-primary-300";
          break;
        case "secondary":
          variantClasses =
            "border-transparent text-secondary-500 fill-secondary-500 hover:text-secondary-600 disabled:text-secondary-300";
          break;
        case "success":
          variantClasses =
            "border-transparent text-success-500 fill-success-500 hover:text-success-600 disabled:text-success-300";
          break;
        case "warning":
          variantClasses =
            "border-transparent text-warning-500 fill-warning-500 hover:text-warning-600 disabled:text-warning-300";
          break;
        case "error":
          variantClasses =
            "border-transparent text-error-500 fill-error-500 hover:text-error-600 disabled:text-error-300";
          break;
        case "gray":
          variantClasses =
            "border-transparent text-t-secondary fill-t-secondary hover:text-t-primary hover:fill-t-primary";
          break;
      }
    }

    // Special styling for white variant (keeping for backward compatibility)
    if (color === "gray" && variant === "filled") {
      variantClasses =
        "bg-b-surface2 border-0 text-t-secondary fill-t-secondary hover:text-t-primary hover:fill-t-primary dark:bg-linear-to-b dark:from-[#2A2A2A] dark:to-[#202020]";
    }

    return `${baseClasses} ${sizeClasses} ${variantClasses} ${className || ""}`;
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <>
          <Icon className="fill-inherit animate-spin mr-2" name="loader" />
          {children}
        </>
      );
    }
    return (
      <>
        {icon && <Icon className="fill-inherit" name={icon} />}
        {children}
      </>
    );
  };

  if (as === "a") {
    return (
      <a
        className={getButtonClasses()}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {renderContent()}
      </a>
    );
  }

  if (as === "link") {
    return (
      <a href={(props as { href: string }).href} className={getButtonClasses()}>
        {renderContent()}
      </a>
    );
  }

  return (
    <button
      className={getButtonClasses()}
      disabled={
        isLoading ||
        (props as React.ButtonHTMLAttributes<HTMLButtonElement>).disabled
      }
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
