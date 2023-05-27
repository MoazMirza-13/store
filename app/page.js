import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex   items-center justify-center ">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          <Link href="/products">Product</Link>
        </h1>
      </div>
    </main>
  );
}
