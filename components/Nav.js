import Link from "next/link";
export default function Nav() {
  return (
    <nav className="flex max-w-[80%] m-auto justify-between">
      <h1 className="text-2xl">
        <Link href="/">Logo</Link>
      </h1>

      <Link className="text-2xl" href="/addToCart">
        Your Cart
      </Link>
    </nav>
  );
}
