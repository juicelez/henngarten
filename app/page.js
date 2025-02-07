import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";

export default function Home() {
  return (
    <div>
      hennfick
      <Header></Header>
      <button className="btn rounded btn-primary shadow">Click Me</button>
    </div>
  );
}
