import axios from "axios";
import { useState } from "react";
import { FaBlackTie } from "react-icons/fa";
import "./Form.css";
import FormInput from "./FormInput";

const URI = "http://10.10.2.96";

const App = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: ""
  });

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "John",
      label: "Nama Depan",
      pattern: "^[A-Za-z]{1,20}$",
      required: true
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Doe",
      label: "Nama Depan",
      pattern: "^[A-Za-z]{1,20}$",
      required: true
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "johndoe123@example.com",
      errorMessage: "Email harus valid.",
      label: "Email",
      required: true
    },
    {
      id: 4,
      name: "phoneNo",
      type: "text",
      placeholder: "08xxxxxxxxxx",
      label: "Nomor Telepon",
      pattern: "^[0-9]{1,20}$",
      required: true
    },
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    axios.post(URI.concat('/api/v1/ticketing/order'),{
      first_name: values.firstName,
      last_name: values.lastName,
      phone: values.phoneNo,
      email: values.email
    }).then(res=>{
      console.log(res.values);
    })

  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Order Confirmation</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default App;