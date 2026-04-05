import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Home.module.scss'


export default function Home() {
  return (
   <div>
   <Link href='/about'><h1>ABOUT</h1></Link> 
   <Link href='/product'> <h1>PRODUCT</h1></Link>
   <div className={styles.container}>Hello</div>
   </div>
  );
}
