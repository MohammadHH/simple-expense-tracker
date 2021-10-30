import { mount } from "expenses/ExpensesApp";
import React, { useRef, useEffect } from "react";

export default (props) => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, props);
  }, [props.expenses]);

  return <div ref={ref} />;
};
