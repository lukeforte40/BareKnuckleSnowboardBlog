import Link from "next/link"
import Styles from "../_styles/nav.module.scss"

interface prop{
    page: string
}

export default function Nav(props: prop) {
    return (
        <nav className={Styles.nav}>
            <Link href="/">Home</Link>
            {props.page != 'about' && <Link href="/about">About</Link>}
            {props.page != 'blog' && <Link href="/blog">Blog</Link>}
        </nav>
    );
  }
