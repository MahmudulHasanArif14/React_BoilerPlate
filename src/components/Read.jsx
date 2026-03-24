const Read = (props) => {
  let users = props.users;

  let data = users.map((user, index) => {
    return (
      <div key={index}>
        <li>
          <h2>{user.name}</h2>
        </li>
        <li>
          <p>Age: {user.age}</p>
        </li>
      </div>
    );
  });
  console.log(data);

  return (
    <div>
      <h1>Read</h1>
      <ul>{data}</ul>
    </div>
  );
};

export default Read;
