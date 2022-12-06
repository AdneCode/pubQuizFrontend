import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/Room/thunks";
import Form from 'react-bootstrap/Form';

export const Hostpage = () => {
  // const categories = useSelector();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  });

  const produceCategories = () => {

  };
  return (
    <div>
      <h1>Hostpage</h1>
      <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </div>
  );
};
