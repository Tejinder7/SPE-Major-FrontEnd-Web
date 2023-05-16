import { Fragment } from "react";
import FormInput from "../UI/FormInput";

const AddFoodCourtForm = () => {
  return (
    <Fragment>
      <FormInput field="name" label="Name" type="text" id="name" />
      <FormInput field="price" label="Price" type="number" id="price" />
      <FormInput field="category" label="Category" type="text" id="category" />
    </Fragment>
  );
};

export default AddFoodCourtForm;