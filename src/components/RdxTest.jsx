import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPerson } from "../actions";

export default function RdxTest() {
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.persons);

  const [name, setName] = useState("John");
  const [secondName, setSecondName] = useState("Petrov");
  const [lastName, setLastName] = useState("Anovna");

  const person = {
    name: name,
    secondName: secondName,
    lastName: lastName,
  };

  return (
    <div className="block">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input
        value={secondName}
        onChange={(e) => setSecondName(e.target.value)}
      />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <button onClick={() => dispatch(addPerson(person))}>Save</button>

      <h2>Persons</h2>

      <ul>
        {persons.map((person, index) => (
          <li key={person.name + index}>
            {person.name} {person.secondName} {person.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}
