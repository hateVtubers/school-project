import { useEffect } from "react";
import { useRouter } from "next/router";
import Nprogress from "nprogress";
import Link from "next/link";
import Image from "next/image";
import useData from "../hook/useData";
import { Card } from "../components/Card";
import PagesHead from "../container/PagesHead"

const Home = () => {
  const {
    home: { imageUrl, link, text, title },
  } = useData(); // destructuring, get children the of object for react context
  const router = useRouter();

  useEffect(() => {
    const handleRouterLoading = () => {
      Nprogress.start();
    };
    router.events.on("routeChangeStart", handleRouterLoading);
    router.events.on("routeChangeComplete", () => Nprogress.done());

    return () => {
      router.events.off("routeChangeStart", () => handleRouterLoading);
    };
  });
  return (
    <>
      <PagesHead></PagesHead>
      <div>
        <header className="h-40 grid grid-rows-2 justify-items-center gap-5">
          <Link href="/">
            <a className="mt-5">
              <Image
                src="/HololiveProductionLogo.svg"
                alt="logo"
                width={200}
                height={80}
                priority={true}
              />
            </a>
          </Link>
          <h1 className="text-center text-turquoise-blue-500 text-lg font-bold text-shadow-strong-title">
            Is a virtual YouTuber talent agency
          </h1>
        </header>
        <main className="flex items-center justify-center flex-wrap gap-5 xl:gap-10">
          {title.map((e, i) => (
            <Card
              img={imageUrl[i]}
              text={e}
              otherText={text[i]}
              key={e}
              url={link[i]}
            />
          ))}
        </main>
      </div>
    </>
  );
};

export default Home;
