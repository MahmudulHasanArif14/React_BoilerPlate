import React from "react";

const Create = (props) => {
  let users = props.users;
  let setUsers = props.setUsers;

  let [form, setForm] = React.useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
   
    let { name, value } = e.target;
    setForm((prev) => ({
      
      ...prev,
      [name]: value,
      
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;

    setUsers([
      ...users,
      {
        name: form.name.trim(),
        age: form.age === "" ? "" : Number(form.age),
        isLoggedIn: false,
      },
    ]);


    // two way data binding
    setForm({ name: "", age: "" });
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          value={form.age}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
