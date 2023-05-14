import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <Modal>
      Form
      <div></div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Cancel</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
