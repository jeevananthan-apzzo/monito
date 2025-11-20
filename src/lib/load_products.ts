export async function loadProducts() {
  // Call an external API endpoint to get products
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function loadProductById(id: number) {
  // Call an external API endpoint to get product
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
}
