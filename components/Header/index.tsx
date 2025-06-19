import { useState, useEffect } from "react";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import SearchGlobal from "./SearchGlobal";
import User from "./User";
import Notifications from "./Notifications";
import Messages from "./Messages";

type HeaderProps = {
  className?: string;
  title?: string;
  hideSidebar?: boolean;
  hideCreateButton?: boolean;
  onToggleSidebar?: () => void;
  LogoComponent?: React.ReactNode;
};

const Header = ({
  className,
  title,
  hideSidebar,
  onToggleSidebar,
  LogoComponent,
}: HeaderProps) => {
  const [hasOverflowHidden, setHasOverflowHidden] = useState(false);
  const [visibleSearch, setVisibleSearch] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "style") {
          const htmlElement = document.documentElement;
          const isOverflowHidden =
            window.getComputedStyle(htmlElement).overflow === "hidden";
          setHasOverflowHidden(isOverflowHidden);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 z-20 bg-b-surface1 max-lg:!right-0 ${
        hasOverflowHidden ? "right-[calc(0px+var(--scrollbar-width))]" : ""
      } ${
        hideSidebar
          ? "left-0"
          : "left-85 max-4xl:left-70 max-3xl:left-60 max-xl:left-0"
      } ${className || ""}`}
    >
      <div
        className={`flex items-center h-22 max-md:h-18 ${
          hideSidebar ? "center max-w-full" : "center-with-sidebar"
        }`}
      >
        <div
          className={`mr-3 gap-3 max-md:mr-auto ${
            hideSidebar ? "flex" : "hidden max-xl:flex"
          }`}
        >
          {LogoComponent || <Logo />}
          <Button
            className="flex-col gap-[4.5px] shrink-0 before:w-4.5 before:h-[1.5px] before:rounded-full before:bg-t-secondary before:transition-colors after:w-4.5 after:h-[1.5px] after:rounded-full after:bg-t-secondary after:transition-colors hover:before:bg-t-primary hover:after:bg-t-primary"
            onClick={onToggleSidebar}
          />
        </div>
        {title && (
          <div className="mr-auto text-h4 max-lg:text-h5 max-md:hidden">
            {title}
          </div>
        )}
        <div
          className={`flex items-center gap-3 ${
            hideSidebar ? "grow max-lg:grow-0 max-lg:ml-auto" : ""
          }`}
        >
          <SearchGlobal
            className={`max-md:hidden ${hideSidebar ? "mr-auto" : ""}`}
            onClose={() => setVisibleSearch(false)}
            visible={visibleSearch}
          />
          <Button
            className="!hidden max-lg:!flex max-md:!hidden"
            onClick={() => setVisibleSearch(true)}
          >
            <Icon name="search" />
          </Button>
          <Notifications />
          <Messages />
          <User />
        </div>
      </div>
    </header>
  );
};

export default Header;
