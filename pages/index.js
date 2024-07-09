import Link from "next/link";

function Home() {
  return (
    <h1 className="text-3xl font-bold text-red underline">
      Link para <Link href="/page2">Page 2</Link>
    </h1>
  );
}

export default Home;
