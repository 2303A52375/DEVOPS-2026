import { Link, Outlet } from "react-router-dom";
import products from "../data/products";
import { useCartActions } from "../context/CartContext";

function Products() {
  const { addItem } = useCartActions();

  return (
    <div>
      <h2>Products</h2>

      <ul>
        {products.map((p) => (
          <li key={p.id} style={{ marginBottom: 8 }}>
            <Link to={`${p.id}`}>{p.name}</Link>

            <button
              style={{ marginLeft: 12 }}
              onClick={() => addItem(p)}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}

export default Products;
