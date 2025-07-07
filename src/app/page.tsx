import Link from "next/link";

export default function Home() {
    return (
        <section className="flex items-center justify-center">
            <div className="flex items-center justify-center bg-main-green w-full gap-[75px] h-[81px] text-white text-[20px] font-semibold">
                <Link href="/features" className="link">Features</Link>
                <Link href="/products" className="link">Products</Link>
                <Link href="/blog" className="link">Blog</Link>
                <Link href="/about" className="link">About</Link>
            </div>
        </section>
    );
}
