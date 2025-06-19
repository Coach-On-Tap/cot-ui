import Image from "@/components/Image";

type LogoProps = {
  className?: string;
  href?: string;
};

const Logo = ({ className, href = "/" }: LogoProps) => {
  return (
    <a className={`block w-12 h-12 ${className || ""}`} href={href}>
      <Image
        className="size-full opacity-100 dark:!hidden"
        src="./cot-logo-header.svg"
        alt="logo"
        width={48}
        height={48}
      />
      <Image
        className="size-full !hidden opacity-100 dark:!block"
        src="./cot-logo-header.svg"
        alt="logo"
        width={48}
        height={48}
      />
    </a>
  );
};

export default Logo;
