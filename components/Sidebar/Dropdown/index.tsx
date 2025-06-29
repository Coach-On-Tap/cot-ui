import AnimateHeight from "react-animate-height";

type DropdownProps = {
  value: {
    title: string;
    LinkComponent?: React.ElementType;
    list?: {
      title: string;
      LinkComponent?: React.ElementType;
      counter?: number;
    }[];
  };
};

const Dropdown = ({ value }: DropdownProps) => {
  const pathname = location.pathname;
  const LinkComponent = value.LinkComponent || "a";
  const isActive = false;
  const isActiveNewProduct =
    pathname === "/products/new" && value.title === "Products";

  return (
    <div className="relative">
      <button
        className={`group relative flex items-center gap-3 w-full h-12 px-3 text-button transition-colors hover:text-t-primary ${
          isActive ? "text-t-secondary" : "text-t-primary"
        } ${isActiveNewProduct ? "!text-t-primary" : ""}`}
      >
        <div className="relative z-2">{value.title}</div>
      </button>
      <AnimateHeight duration={500} height={isActive ? "auto" : 0}>
        <div className="relative flex flex-col pl-9 before:absolute before:top-0 before:left-[1.4375rem] before:bottom-12 before:w-[1.5px] before:bg-s-stroke2">
          {value.list?.map((item) => (
            <div className="relative" key={item.title}>
              <div className="absolute top-0 -left-[0.8125rem] bottom-[calc(50%-0.75px)] w-[0.8125rem] border-l border-b border-s-stroke2 rounded-bl-[10px]"></div>
              <div
                className={`group relative flex items-center gap-3 w-full h-12 px-3 text-button transition-colors hover:text-t-primary ${
                  isActive ? "text-t-secondary" : "text-t-primary"
                } ${isActiveNewProduct ? "!text-t-primary" : ""}`}
              >
                <LinkComponent>
                  <div className="relative z-2">{item.title}</div>
                </LinkComponent>
              </div>
            </div>
          ))}
        </div>
      </AnimateHeight>
    </div>
  );
};

export default Dropdown;
