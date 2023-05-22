import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import homeIcon from "src/assets/home.svg";
import statsIcon from "src/assets/stats.svg";
import barbellIcon from "src/assets/barbell.svg";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="absolute bottom-0 flex h-24 w-full justify-around sm:justify-center gap-0 sm:gap-4 border-t-2 bg-emerald-300">
      <button className={router.pathname == "/workout" ? "btn active" : "btn"}>
        <Link href={"/"}></Link>
        <Image src={barbellIcon} alt="" className="icon"/>
      </button>
      <button className={router.pathname == "/" ? "btn active" : "btn"}>
        <Link href={"/"}></Link>
        <Image src={homeIcon} alt="" className="icon"/>
      </button>
      <button className={router.pathname == "/stats" ? "btn active" : "btn"}>
        <Link href={"/"}></Link>
        <Image src={statsIcon} alt="" className="icon"/>
      </button>
    </footer>
  );
}
