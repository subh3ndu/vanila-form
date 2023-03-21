import React from "react";
import { FaUser, FaPhoneAlt, FaEnvelope, FaLock } from "react-icons/fa";
import "./App.css";

function App() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    password: "",

    toString() {
      return `name: ${this.name}, email: ${this.email}, phone: ${this.phone}, password: ${this.password}`;
    },
  });

  function handleSubmit(event) {
    event.preventDefault();
    alert(formData);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  return (
    <div className="App">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="item">
            <FaUser
              size={40}
              style={{
                padding: 6,
                color: "#312d62",
                border: "1px solid #000",
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
              }}
            />
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
          <div className="item">
            <FaEnvelope
              size={40}
              style={{
                padding: 6,
                color: "#312d62",
                border: "1px solid #000",
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
              }}
            />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email ID"
            />
          </div>
          <div className="item">
            <FaPhoneAlt
              size={40}
              style={{
                padding: 6,
                color: "#312d62",
                border: "1px solid #000",
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
              }}
            />
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              placeholder="Phone"
            />
          </div>
          <div className="item">
            <FaLock
              size={40}
              style={{
                padding: 6,
                color: "#312d62",
                border: "1px solid #000",
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
              }}
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Set Password"
            />
          </div>
          <button>{"register".toUpperCase()}</button>
        </form>
      </div>
    </div>
  );
}

export default App;
