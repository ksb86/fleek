import Link from "next/link";

export default function Nav() {
    return (
        <nav style={{background: '#fafafa'}}>
            <Link href="/">
                <a> Home </a>
            </Link>
            &nbsp;|&nbsp;
            <Link href="/about">
                <a> About </a>
            </Link>
        </nav>
    );
}
