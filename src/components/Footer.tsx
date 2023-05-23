import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import homeIcon from "src/assets/home.svg";
import statsIcon from "src/assets/stats.svg";
import barbellIcon from "src/assets/barbell.svg";

import logInIcon from "src/assets/log-in.svg";
import logOutIcon from "src/assets/log-out.svg";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Footer() {
  const router = useRouter();
  const session = useSession();
  const user = session.data?.user;

  return (
    <footer className="absolute bottom-0 flex h-24 w-full justify-around gap-0 border-t-2 bg-emerald-300 sm:justify-center sm:gap-4">
      {user != null && (
        <button
          className={router.pathname == "/workout" ? "btn active" : "btn"}
        >
          <Link href={`/workout/${user.id}`}>
            <Image src={barbellIcon} alt="" className="icon" />
          </Link>
        </button>
      )}
      <button className={router.pathname == "/" ? "btn active" : "btn"}>
        <Link href={"/"}>
          <Image src={homeIcon} alt="" className="icon" />
        </Link>
      </button>
      {user != null && (
        <button className={router.pathname == "/stats" ? "btn active" : "btn"}>
          <Link href={`/stats/${user.id}`}>
            <Image src={statsIcon} alt="" className="icon" />
          </Link>
        </button>
      )}
      {user == null ? (
        <button className="btn" onClick={() => void signIn()}>
          <Image src={logInIcon} alt="" className="icon" />
        </button>
      ) : (
        <button className="btn" onClick={() => void signOut()}>
          <Image src={logOutIcon} alt="" className="icon" />
        </button>
      )}
    </footer>
  );
}
