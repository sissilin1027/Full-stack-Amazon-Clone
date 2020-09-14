import { store } from "react-notifications-component";
import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const CheckoutProduct = forwardRef(
  ({ id, image, title, price, rating, hideButton }, ref) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
      dispatch({
        type: actionTypes.REMOVE_FROM_BASKET,
        id,
      });

      store.addNotification({
        title: "Info!",
        message: `${title} has successfully been removed from basket!`,
        type: "default",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
          showIcon: true,
          pauseOnHover: true,
        },
      });
    };

    return (
      <div className="checkoutProduct">
        <img className="checkoutProduct_image" src={image} />

        <div className="checkoutProduct_info">
          <p className="checkoutProduct_title">{title}</p>
          <p className="checkoutProduct_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>&#11088;</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromBasket}>Remove from Basket</button>
          )}
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
