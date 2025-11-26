import { product } from "@/pages";

export async function loadProducts() {
  // Call an external API endpoint to get products
  try {
    const res = await fetch(`https://fakestoreapi.com/products`);

    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function loadProductById(id: number) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      headers: { "User-Agent": "Mozilla/5.0", Accept: "application/json" },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}


