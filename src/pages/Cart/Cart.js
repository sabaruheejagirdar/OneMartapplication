import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCart, removeFromCart } from "../../state/slices/cartSlice";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [cartValue, setCartValue] = useState({
    subtotal: 0,
    tax: 0,
    shipping: 0,
    total: 0,
  });
  const tax = 5 / 100;

  useEffect(() => {
    // dispatch(fetchCart());
  }, []);

  useEffect(() => {
    const subtotal = calculateSubTotal();
    setCartValue({
      subtotal: subtotal,
      tax: subtotal * tax,
      shipping: subtotal ? 15 : 0,
      total: subtotal + subtotal * tax + (subtotal ? 15 : 0),
    });
  }, [cart]);

  const onRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const calculateSubTotal = () =>
    cart?.cart?.reduce((acc, curr) => acc + curr.qt * curr.price, 0);

  return (
    <section className="vh-500" style={{ backgroundColor: "#232659" }}>
      <div className="wrapper">
        <h1>My Cart</h1>
        {cart?.cart?.length ? (
          <div className="cart">
            <div className="cartproducts">
              {cart?.cart?.map((item) => (
                <div className="product" key={item.id}>
                  <div className="pdt_img">
                    <img src={item.image} alt="ok" />
                  </div>
                  <div className="description">
                    <h3>{item.name}</h3>
                    <h4>${item.price}</h4>
                    <p className="quantity">
                      Quantity: <span>+</span>
                      <span>{item.qt}</span>
                      <span>-</span>
                    </p>
                    <p className="btn-remove" onClick={() => onRemove(item.id)}>
                      {" "}
                      <span className="btn2">Remove</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="price-details">
              <p>
                <span>Subtotal</span> <span>${cartValue.subtotal}</span>
              </p>
              <hr />
              <p>
                <span>Tax</span> <span>${cartValue.tax}</span>
              </p>
              <hr />
              <p>
                <span>Shipping Cost</span> <span>${cartValue.shipping}</span>
              </p>
              <hr />
              <p>
                <span>
                  <b>Total</b>
                </span>{" "}
                <span>
                  <b>${cartValue.total}</b>
                </span>
              </p>
              <Link to="/payment">
                <i className="fa fa-shopping-cart"></i>Checkout
              </Link>
            </div>
          </div>
        ) : (
          <div class="empty-cart">
            <img src="/app/asset/icons/empty.svg" />
            <p>Uh-Oh your cart is empty</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
