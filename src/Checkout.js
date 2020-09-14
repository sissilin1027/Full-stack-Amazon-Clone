import userEvent from "@testing-library/user-event";
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const ticketNotVisibleState = {
    transform: "translateX(-100%)",
    opacity: 0.1,
  };
  return (
    <div className="checkout">
      <div className="checkout_container">
        <div className="checkout_left">
          <img
            className="checkout_ad"
            src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Toys_Internet/XCM_Manual_1231847_1223960_US_us_kgg_q3_tgs_back_to_main_revision_us_en_3183154_1500x120_en_US.jpg"
            alt=""
          />

          <div>
            <h3 className="checkout_title">Your Shopping Basket</h3>

            {basket.length === 0 && (
              <div className="checkout_main">
                <img
                  className="checkout_image"
                  src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
                />

                <h3 className="checkout_emptyCart">Your cart is empty</h3>
              </div>
            )}

            {basket.map((item) => (
              <div className="checkout_product">
                {" "}
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
