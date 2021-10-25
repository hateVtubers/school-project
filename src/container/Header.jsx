import { useEffect } from "react";
import { useRouter } from "next/router";
import Nprogress from "nprogress";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const { events } = useRouter();

  useEffect(() => {
    const handleRouteLoading = () => {
      Nprogress.start();
    };

    events.on("routeChangeStart", handleRouteLoading);

    events.on("routeChangeComplete", () => Nprogress.done());

    return () => {
      events.off("routeChangeStart", handleRouteLoading);
    };
  });
  return (
    <header className="text-center">
      <Link href="/">
        <a className="absolute left-0 top-0 ml-5">
          <Image
            src="/HololiveProductionLogo.svg"
            alt="logo"
            width={150}
            height={80}
            priority={true}
          />
        </a>
      </Link>
    </header>
  );
};
/* nvm use --lts */
export default Header;
