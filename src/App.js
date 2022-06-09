import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import threenom from "threenom";
import { useState } from "react";
import punycode from "punycode";

export default function App() {
  const [domain, setDomain] = useState();
  const [domainData, setDomainData] = useState([]);

  async function checker() {
    let data = await threenom(punycode.toASCII(domain));
    setDomainData(data);
  }

  function availability(item) {
    if (item.status === "AVAILABLE" && item.type === "FREE") {
      return (
        <a
          className="font-bold underline text-green-500"
          href={`https://my.freenom.com/domains.php?a=availability&domain=${item.domain}${item.tld}`}
        >
          {item.domain}
          {item.tld} is available
        </a>
      );
    } else if (item.status === "AVAILABLE" && item.type !== "FREE") {
      return (
        <a
          className="font-bold  text-orange-600 hover:underline"
          href={`https://my.freenom.com/domains.php?a=availability&domain=${item.domain}${item.tld}`}
        >
          {item.domain}
          {item.tld} is available but costs {item.price_int} {item.currency}
        </a>
      );
    } else {
      return (
        <a
          className="font-bold hover:underline text-red-600"
          href={`https://my.freenom.com/domains.php?a=availability&domain=${item.domain}${item.tld}`}
        >
          {item.domain}
          {item.tld} isn't available
        </a>
      );
    }
  }

  return (
    <div className="h-screen text-white">
      <Navbar />
      <div className="h-[40vh] flex flex-col items-center justify-center my-5">
        <h1 className="text-7xl font-bold">
          <span className="text-sky-600">Free</span>nom
        </h1>
        <h1 className="text-2xl my-3">Domain Checker</h1>
        <div className="my-3">
          <input
            className="text-black text-center rounded"
            onChange={(e) => setDomain(e.target.value)}
          ></input>
          <button
            className="mx-5 px-1 border-2 border-solid rounded"
            onClick={checker}
          >
            Check
          </button>
        </div>
      </div>
      <div className="h-auto text-center flex justify-center items-center flex-col py-7 my-5">
        {domainData.map((item) => availability(item))}
      </div>
      <Footer />
    </div>
  );
}
