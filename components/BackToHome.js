import Link from "next/link";

export default function backToHome() {
  return (
    <div>
      <Link href="/" className="text-xl">
        Go To Home Page
      </Link>
    </div>
  );
}
