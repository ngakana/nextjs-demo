import { getCurrencyList } from "@/lib/data";
import styles from "./styles/Components/page.module.scss";

export default async function Home() {
  const currencyList = await getCurrencyList();

  return (
    <main data-theme="dark" className={styles.page}> 
    </main>
  );
}
