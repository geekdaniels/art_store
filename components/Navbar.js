import Image from "next/image";
import Logo from "../public/logo.png";
import CartIcon from "../public/shopping-cart.svg";

import { useProduct } from "../components/context";

const Navbar = () => {
  const { clearCartItem, cart, cartOpen, setCartOpen } = useProduct();
  return (
    <>
      <div className="container sticky-top">
        <nav className="navbar">
          <a className="navbar-logo" href="#">
            <Image src={Logo} alt="Logo" />
          </a>

          <ul className="nav">
            <li className="nav-item cart">
              <a href="#">
                {" "}
                <Image src={CartIcon} alt="" width={40} />
              </a>
              <div
                className={
                  cartOpen
                    ? "cart-dropdown open-cart-dropdown"
                    : "cart-dropdown"
                }
              >
                <button className="close" onClick={() => setCartOpen(false)}>
                  x
                </button>
                <div className="cart-item-wrapper">
                  {cart.length > 0 ? (
                    cart.map((item, index) => (
                      <div key={index}>
                        <div className="cart-list">
                          <div className="cart-image cart-list-item">
                            <Image
                              width="150"
                              height="90"
                              src={item.image.src}
                              className="img-fluid"
                              alt={item.image.alt}
                              loading="lazy"
                            />{" "}
                          </div>
                          <div className="cart-desc cart-list-item">
                            <h3 className="cart-item-name">{item.name}</h3>
                            <p className="cart-item-price">${item.price}</p>
                          </div>
                        </div>
                        <hr className="my-2" />
                      </div>
                    ))
                  ) : (
                    <p>Your Cart is empty</p>
                  )}
                </div>
                {cart.length > 0 && (
                  <button
                    className="btn btn--primary__outline"
                    onClick={() => clearCartItem()}
                  >
                    Clear
                  </button>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
