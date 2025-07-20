import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div id="display">
      <div id="menu-bar" className="blur">
        <div></div>
        <div>
          <p>Dom 22:15:33</p>
        </div>
        <div></div>
      </div>
      <div className="initialize">
        <div>
          <img src="/images/profile/1.png" alt="" />
          <p>Chris Axxwell</p>
          <input className="blur" type="password" placeholder="Digite sua senha" />
        </div>
        <img id="background" src="/images/wallpapers/3.png" alt="" />
      </div>
    </div>
  );
}
