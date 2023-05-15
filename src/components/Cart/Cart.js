import Button from "../UI/Button";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import Checkout from "./Checkout";

const Cart = (props) => {
  return (
    <Modal>
      <Checkout />
      <div></div>
      <div className={classes.actions}>
        {/* <button className={classes["button--alt"]}>Cancel</button> */}
        {/* <button className={classes.button}>Order</button> */}
        <Button message="Order" />
        <Button alt={true} message="Cancel" />
      </div>
    </Modal>
  );
};

export default Cart;
