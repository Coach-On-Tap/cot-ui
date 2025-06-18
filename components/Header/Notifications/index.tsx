import { useState } from "react";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import Image from "@/components/Image";

const newNotifications = [
  {
    id: 1,
    avatar: "/images/notifications/avatar-1.png",
    login: "John Doe",
    action: "liked your post",
    product: "Product 1",
    time: "12:00 PM",
  },
  {
    id: 2,
    avatar: "/images/notifications/avatar-2.png",
    login: "Jane Smith",
    action: "commented on your post",
    product: "Product 2",
    time: "11:30 AM",
  },
];

const Notifications = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button isWhite isCircle onClick={() => setIsOpen(true)}>
        <Icon name="bell" />
      </Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} isSlidePanel>
        <div className="flex items-center h-20 pl-10 pr-20 pt-5 pb-3 text-h5 max-md:h-18 max-md:pt-3 max-md:pl-9">
          Notifications
        </div>
        <div className="h-[calc(100svh-5rem)] px-5 pb-5 overflow-y-auto max-md:h-[calc(100svh-4.5rem)] max-md:px-4">
          {newNotifications.map((notification) => (
            <div
              className="group relative flex items-center p-5"
              key={notification.id}
            >
              <div className="absolute inset-0 gradient-card rounded-[16px] invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                <div className="absolute inset-[1.5px] bg-b-highlight rounded-[14.5px]"></div>
              </div>
              <a
                className="relative z-2 shrink-0 w-12 h-12 rounded-full overflow-hidden"
                href="/shop"
              >
                <Image
                  className="size-12 rounded-full opacity-100"
                  src={notification.avatar}
                  width={48}
                  height={48}
                  alt=""
                />
              </a>
              <div className="relative z-2 w-[calc(100%-3rem)] pl-4">
                <div className="truncate text-body-2 text-t-secondary [&_span]:text-t-primary">
                  <a href="/shop">
                    <span>@{notification.login}</span>
                  </a>
                  &nbsp;{notification.action}&nbsp;
                  <a href="/shop/details">
                    <span>{notification.product}</span>
                  </a>
                </div>
                <div className="mt-1 text-caption text-t-tertiary">
                  {notification.time}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button
          className="!absolute left-1/2 bottom-5 z-3 -translate-x-1/2"
          isBlack
          as="link"
          href="/notifications"
        >
          All notifications
        </Button>
      </Modal>
    </>
  );
};

export default Notifications;
