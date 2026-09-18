import { getCurrencyList } from "@/lib/data";
import ImageSelect from "./components/ImageSelect";

import colours from "@/app/styles/abstracts/colours";

export default async function Home() {
  const currencyList = await getCurrencyList();

  return (
    <div style={{ 
      height: "100%", 
      width: "400px", 
      backgroundColor: colours.dark.primary, 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center" 
    }}>
      <label style={{ color: colours.dark.text }} htmlFor="fromCurrency">From:</label>
      <ImageSelect
        options={currencyList.map(c => ({
          value: c.code,
          label: c.code,
          image: c.flag,
        }))}
        value={currencyList[0]?.code || ""}
      />
    </div>
  );
}
