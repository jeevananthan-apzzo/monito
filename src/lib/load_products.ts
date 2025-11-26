export async function loadProducts() {
  // Call an external API endpoint to get products
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      headers: {
        "User-Agent": "Mozilla/5.0", // ← THIS FIXES NETLIFY
        Accept: "application/json",
      },
    });
    console.log("DEBUG NETLIFY FETCH STATUS:", res.status);

    const data = await res.json();
    console.log("DEBUG NETLIFY FETCH RESPONSE:", data);

    return data;
  } catch (error) {
    return error;
  }
}

export async function loadProductById(id: number) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}
