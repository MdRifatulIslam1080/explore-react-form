import React from "react";
import useInputField from "../../Hooks/useInputField";

const HookForm = () => {
  const [name, nameOnChange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const [password, passwordOnChange] = useInputField("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", name, email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          required
          defaultValue={name}
          type="text"
          onChange={nameOnChange}
          placeholder="name"
        />
        <br />
        <input
          required
          type="email"
          name="email"
          onChange={emailOnChange}
          placeholder="email"
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={passwordOnChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
