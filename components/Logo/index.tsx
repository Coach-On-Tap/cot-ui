import Image from "@/components/Image";
import { Link } from "react-router-dom";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Link className={`block w-12 h-12 ${className || ""}`} to="/">
      <Image
        className="size-full opacity-100 dark:!hidden"
        src="/images/logo-light.png"
        alt="logo"
        width={48}
        height={48}
      />
      <Image
        className="size-full !hidden opacity-100 dark:!block"
        src="/images/logo-light.png"
        alt="logo"
        width={48}
        height={48}
      />
    </Link>
  );
};

export default Logo;
