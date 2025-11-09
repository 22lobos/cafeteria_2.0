import { useCart } from "../cart/CartContext";

export default function CartButton() {
  const { count, fmt, total } = useCart();
  return (
    <button
      className="btn btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#cartDrawer"
    >
      🛒 {count} · {fmt(total)}
    </button>
  );
}
