import classes from "./Checkout.module.css";

const Checkout = (props) => {
  return (
    <form>
      <section className={classes.title}>
        <h2>Add New Dish</h2>
      </section>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="price">Price</label>
        <input type="number" id="price" />
      </div>
      <div className={classes.control}>
        <label htmlFor="category">Category</label>
        <input type="text" id="category" />
      </div>
      {/* <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div> */}
    </form>
  );
};

export default Checkout;
