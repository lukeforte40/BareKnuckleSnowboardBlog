import Image from "next/image";
import Style from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={Style.main}>
      <Link href="/about" className={Style.card}>
        <div id="about">
          <h2>About</h2>
          <div className={Style.preview}>
            <p>Fix Me</p>
          </div>
        </div>
      </Link>
      <Link href="/blog" className={Style.card}>
        <div id="blog">
          <h2>Blog</h2>
          <div className={Style.preview}>
            <p>Fix Me</p>
          </div>
        </div>
      </Link>
    </main>
  );
}
