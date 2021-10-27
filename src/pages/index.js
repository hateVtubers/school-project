import { useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Nprogress from "nprogress";
import Link from "next/link";
import Image from "next/image";
import { Card } from "../components/Card";
import PagesHead from "../container/PagesHead";
import { Loading } from "../components/Loading";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Home = () => {
  const router = useRouter();
  const { data, error } = useSWR("/api/a", fetcher);

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

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />;

  const { home: { title, text, link, imageUrl } } = data;
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
                blurDataURL
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
/*
<iframe width="1280" height="720" src="https://www.youtube.com/embed/3RxlzJWWzdY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/