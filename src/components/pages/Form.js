import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import FormInput from "./FormInput";
import "../style/Form.css";

const App = () => {
  const URL = (process.env.REACT_APP_URL).concat('/api/v1/ticketing/order')
  const navigate = useNavigate();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: ""
  });

  useEffect(() => {
    const snapSrcUrl = process.env.REACT_APP_snapSrcUrl;
    const myMidtransClientKey = process.env.myMidtransClientKey;
    
    const script = document.createElement('script');
    script.src = snapSrcUrl;
    script.setAttribute('data-client-key', myMidtransClientKey);
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
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
      label: "Nama Belakang",
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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try{
      const res = await axios.post(URL,  
        {
          first_name: values.firstName,
          last_name: values.lastName,
          phone: values.phoneNo,
          email: values.email
        },
        {withCredentials:true}
      )
      const token = res.data.token
      console.log(res.data);

      window.snap.pay(token, {
        onSuccess: function(result){
          alert("payment success!, check your email"); console.log(result);
          setTimeout(() => navigate("/FI"), 1000)
          
        },
        onPending: function(result){
          alert("wating your payment!"); console.log(result);
          
        },
        onError: function(result){
          alert("payment failed!"); console.log(result);
          
        },
        onClose: function(){
          alert('you closed the popup without finishing the payment');
          
        }
      })
    } catch (err) {
      console.error(err);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1 className="Form-title">Data Pemesan</h1>
        <div className="Form-label">
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
        </div>
        <button className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default App;