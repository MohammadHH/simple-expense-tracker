import { useState } from "react";

const useForm = (
  options = {
    initialValues: {},
    onSubmit: () => {},
  }
) => {
  const [data, setData] = useState(options?.initialValues || {});

  const handleChange = (key) => (e) =>
    setData({
      ...data,
      [key]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (options?.onSubmit) {
      options.onSubmit();
    }
  };

  return {
    data,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
