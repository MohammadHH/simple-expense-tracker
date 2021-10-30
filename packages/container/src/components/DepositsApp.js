import { mount } from "deposits/DepositsApp";
import React, { useRef, useEffect } from "react";

export default (props) => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, props);
  }, [props.deposits]);

  return <div ref={ref} />;
};
