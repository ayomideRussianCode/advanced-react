// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

import { useState } from "react";

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && email) {
      const person = {
        id: new Date().getTime().toString(),
        firstName,
        lastName,
        email
      };
      console.log(person);

      //add new person to people array

      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setLastName("");
      setEmail("");

      console.log(person);
    } else {
      console.log("empty values");
    }
  };
  return (
    <>
      <article>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">First Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lastName">Last Name : </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn" type="submit">
            add person
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, lastName, email } = person;
          return (
            <div key={id} className="item">
              <h4>
                {firstName} {lastName}
              </h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
