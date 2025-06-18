import Icon from "@/components/Icon";

type NavLinkProps = {
  value: {
    href: string;
    title: string;
    icon?: string;
    counter?: number;
  };
  onClick?: () => void;
  isActive?: boolean;
};

const NavLink = ({ value, onClick, isActive = false }: NavLinkProps) => {
  return (
    <a
      className={`group relative flex items-center shrink-0 gap-3 h-12 px-3 text-button transition-colors hover:text-t-primary ${
        value.icon ? "h-12" : "h-11"
      } ${isActive ? "text-t-primary" : "text-t-secondary"}`}
      href={value.href}
      key={value.title}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute inset-0 gradient-menu rounded-xl shadow-depth-menu">
          <div className="absolute inset-0.25 bg-b-pop rounded-[0.6875rem]"></div>
        </div>
      )}
      {value.icon && (
        <Icon
          className={`relative z-2 transition-colors group-hover:fill-t-primary ${
            isActive ? "fill-t-primary" : "fill-t-secondary"
          }`}
          name={value.icon}
        />
      )}
      <div className="relative z-2 mr-3">{value.title}</div>
      {value.counter && (
        <div
          className={`relative z-2 flex justify-center items-center w-6 h-6 ml-auto rounded-lg bg-secondary-01 text-button text-shade-01 ${
            value.title === "Scheduled" ? "bg-secondary-04" : ""
          }`}
        >
          {value.counter}
        </div>
      )}
    </a>
  );
};

export default NavLink;
