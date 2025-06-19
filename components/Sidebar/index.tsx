import Logo from "@/components/Logo";
import { RemoveScroll } from "react-remove-scroll";
import NavLink from "@/components/NavLink";
import Button from "@/components/Button";
import Dropdown from "./Dropdown";

export type SidebarProps = {
  visibleSidebar?: boolean;
  hideSidebar?: boolean;
  onCloseSidebar?: () => void;
  navigation?: {
    title: string;
    LinkComponent?: React.ElementType;
    counter?: number;
    list?: {
      title: string;
      LinkComponent?: React.ElementType;
      counter?: number;
    }[];
  }[];
  LogoComponent?: React.ReactNode;
};

const Sidebar = ({
  visibleSidebar,
  hideSidebar,
  onCloseSidebar,
  navigation,
  LogoComponent = <Logo />,
}: SidebarProps) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 bottom-0 flex flex-col w-85 p-5 bg-b-surface1 transition-transform duration-300 max-4xl:w-70 max-3xl:w-60 max-xl:w-74 max-md:p-3 ${
          visibleSidebar
            ? `${
                hideSidebar
                  ? "z-40 translate-x-0"
                  : "max-xl:z-40 max-xl:translate-x-0"
              }`
            : `${
                hideSidebar
                  ? "z-40 -translate-x-full"
                  : "max-xl:z-40 max-xl:-translate-x-full"
              }`
        }`}
      >
        <div className="mb-5">{LogoComponent || <Logo />}</div>
        <Button
          className={`group absolute top-5 right-5 max-md:top-3 max-md:right-3 ${
            hideSidebar ? "flex" : "!hidden max-xl:!flex"
          }`}
          icon="close"
          onClick={onCloseSidebar}
          isCircle
          variant="filled"
          color="gray"
        />
        <RemoveScroll
          className="flex flex-col gap-1 grow overflow-auto -mx-5 px-5 scrollbar scrollbar-thumb-t-tertiary/50 scrollbar-track-b-surface2 max-md:-mx-3 max-md:px-3"
          enabled={visibleSidebar}
        >
          {navigation?.map((item) =>
            item.LinkComponent ? (
              <NavLink key={item.title} value={item} />
            ) : (
              <Dropdown key={item.title} value={item} />
            )
          )}
        </RemoveScroll>
      </div>
    </>
  );
};

export default Sidebar;
