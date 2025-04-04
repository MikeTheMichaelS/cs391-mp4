import Link from "next/link";

export default function Header() {
    const linkStyling = "p-1 m-2 text-xl hover:underline";
    return (
        <header className="flex justify-between items-center h-20">
            <h2 className="text-4xl font-semibold p-4">
                MP4 - Cats
            </h2>
            <nav>
                <Link href="/" className={linkStyling}>Home</Link>
            </nav>
        </header>
    );
}