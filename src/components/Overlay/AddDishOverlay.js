import AddDishForm from "../Forms/AddDishForm";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

import classes from "./AddDishOverlay.module.css";

const AddDishOverlay = (props) => {
  return (
    <Modal>
      <form>
        <section className={classes.title}>
          <h2>Add New Dish</h2>
        </section>
        <AddDishForm />
      </form>
      <div className={classes.actions}>
        <Button message="Add" />
        <Button
          alt={true}
          message="Cancel"
          type="button"
          onPress={props.onCancel}
        />
      </div>
    </Modal>
  );
};

export default AddDishOverlay;
