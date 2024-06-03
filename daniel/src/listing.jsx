import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

export function Listing() {
  const [prodotti, setProdotti] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProdotti(data))
      .catch((error) => console.error("Errore durante la chiamata API", error));
  }, []);

  return (
    <div>
      {prodotti.map((prodotto) => (
        <ProductCard prodotto={prodotto} key={prodotto.id} />
      ))}
    </div>
  );
}