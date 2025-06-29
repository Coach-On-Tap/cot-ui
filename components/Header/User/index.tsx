import { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuSeparator,
} from "@headlessui/react";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import Login from "@/components/Login";

export type UserProps = {
  avatarUrl: string;
  navigationUser: {
    title: string;
    LinkComponent?: React.ElementType;
  }[];
  onLogout: () => void;
};

const User = (props: UserProps) => {
  const { avatarUrl, navigationUser, onLogout } = props;
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (href: string) => href === href;

  return (
    <>
      <Menu className="group" as="div">
        <div className="fixed inset-0 z-30 bg-b-surface1/70 invisible opacity-0 transition-all group-[[data-open]]:visible group-[[data-open]]:opacity-100"></div>
        <MenuButton className="relative z-40 w-12 h-12 rounded-full overflow-hidden transition-colors after:absolute after:inset-[0.09375rem] after:border-[0.15625rem] after:border-b-surface2 after:rounded-full data-[hover]:bg-primary-01 data-[active]:bg-primary-01">
          <Image
            className="size-10 rounded-full object-cover opacity-100"
            src={avatarUrl}
            width={40}
            height={40}
            alt="avatar"
          />
        </MenuButton>
        <MenuItems
          className="z-100 w-67.5 p-3 rounded-4xl bg-b-surface2 border-1 border-s-subtle outline-none shadow-dropdown [--anchor-gap:0.625rem] [--anchor-offset:0.625rem] origin-top transition duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 max-md:w-[calc(100vw-1.5rem)] max-md:[--anchor-offset:0]"
          anchor="bottom end"
          transition
        >
          {navigationUser.map(({ title, LinkComponent }, index) => (
            <MenuItem key={index}>
              <div
                className={`group/item relative flex items-center h-12 px-3 text-button text-t-secondary transition-colors data-[focus]:text-t-primary before:absolute before:inset-0 before:rounded-[16px] before:bg-linear-to-b before:from-shade-09 before:to-[#ebebeb] before:opacity-0 before:transition-opacity after:absolute after:inset-0.25 after:bg-b-pop after:rounded-[15px] after:opacity-0 after:transition-opacity ${"!text-primary-01"}`}
              >
                {LinkComponent ? (
                  <LinkComponent>
                    <div className="relative z-2">{title}</div>
                  </LinkComponent>
                ) : (
                  <div className="relative z-2">{title}</div>
                )}
              </div>
            </MenuItem>
          ))}
          <MenuSeparator className="-mx-3 my-3 h-px bg-s-subtle" />
          <MenuItem>
            <button
              className="group/item flex items-center w-full h-12 px-3 text-button text-t-secondary transition-colors data-[focus]:text-t-primary"
              onClick={onLogout}
            >
              <Icon
                className="mr-4 fill-t-secondary transition-colors group-[[data-focus]]/item:fill-t-primary"
                name="logout"
              />
              Log out
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
      <Modal
        classWrapper="!max-w-120 p-16 bg-b-surface2"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Login />
      </Modal>
    </>
  );
};

export default User;
