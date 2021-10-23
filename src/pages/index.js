import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import { Card } from "../components/Card";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data, error } = useSWR("/api/a", fetcher);
  console.log(data);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <header>
        <Link href="/">
          <a className="flex items-center justify-center mt-5">
            <Image
              src="/HololiveProductionLogo.svg"
              alt="logo"
              width={200}
              height={80}
              className="mx-auto"
            />
          </a>
        </Link>
        <h1 className="text-center text-turquoise-blue-500 text-lg font-bold text-shadow-strong-title">
          Is a virtual YouTuber talent agency
        </h1>
      </header>
      <main>
        <Card img="url(a.webp)"></Card>
      </main>
    </div>
  );
};

export default Home;
/* box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38); */
