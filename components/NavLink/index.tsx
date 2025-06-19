type NavLinkProps = {
  value: {
    title: string;
    LinkComponent?: React.ElementType;
    IconComponent?: React.ElementType;
    counter?: number;
    icon?: string;
  };
  onClick?: () => void;
  isActive?: boolean;
};

const NavLink = ({ value, onClick, isActive = false }: NavLinkProps) => {
  const LinkComponent = value.LinkComponent || "a";
  const IconComponent = value.IconComponent || "div";
  return (
    <div
      className={`group relative flex items-center shrink-0 gap-3 h-12 px-3 text-button transition-colors hover:text-t-primary ${
        IconComponent ? "h-12" : "h-11"
      } ${isActive ? "text-t-primary" : "text-t-secondary"}`}
      key={value.title}
      onClick={onClick}
    >
      <LinkComponent>
        {isActive && (
          <div className="absolute inset-0 gradient-menu rounded-xl shadow-depth-menu">
            <div className="absolute inset-0.25 bg-b-pop rounded-[0.6875rem]"></div>
          </div>
        )}
        {IconComponent && (
          <IconComponent
            className={`relative z-2 transition-colors group-hover:fill-t-primary ${
              isActive ? "fill-t-primary" : "fill-t-secondary"
            }`}
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
      </LinkComponent>
    </div>
  );
};

export default NavLink;
