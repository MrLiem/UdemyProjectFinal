import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useSelector } from "react-redux";

const CartIcon = props => {
  const courses = useSelector(state => state.cart.courses);
  let num = Object.keys(courses).length;

  const goToCartScreen=()=>{
      props.history.push("/cart");
  }
  return (
    <div style={{display :'flex'}} onClick={goToCartScreen}>
      <AddShoppingCartIcon></AddShoppingCartIcon>
      <div>({num})</div>
    </div>
  );
};

export default CartIcon;
