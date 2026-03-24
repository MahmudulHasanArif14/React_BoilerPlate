import React from "react";
import Create from "./components/Create";
import Read from "./components/read";

const App = () => {
  //  here we write js logics
  // non parameter function
  const handleClick = () => {
    alert("Button clicked");
  };

  //  parameter function
  const handleClickWithParam = (name) => {
    alert(`Hello ${name}`);
  };

  //  if we want to pass parameter to the function, we need to use an arrow function in the onClick event, otherwise the function will be called immediately when the component is rendered, and we do not want that, we want the function to be called only when the button is clicked, so we need to use an arrow function like this or a function we have to define then we can just pass the reference to the function in the onClick event like this:
  const handleClickParameter = () => {
    handleClickWithParam("John");
  };

  // rendering element in react
  let name = "John"; // we can show in view but we can show in console
  let age = 30;// we can show in view but we can show in console
  let isLoggedIn = true; // can't show in view but we can show in console
  let user = {
    name: "John",
    age: 30,
    isLoggedIn: true,
  };// to view use object.propertiesName
  let users = [<h1>hi</h1>, 1, "John", true, null, undefined]; //will show in view with concatination but we can show in console as array
  
  let n = null; // can't show in view but we can show in console

  let un = undefined; //can't show in view but we can show in console
  



// getting the json object data

let profiles=[
  {
    "id": 1,
    "name": "John Doe",
    "age": 30,
    "email": "john.doe@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "age": 25,
    "email": "jane.smith@example.com"
  }
];





// useState is a hook that allows us to add state to our functional components. It returns an array with two elements: the current state value and a function to update it. We can use it like this:
// const [state, setState] = useState(initialState);

let [count, setCount] = React.useState(0);


let [userState, setUserState] = React.useState([
  {
    name: "John",
    age: 30,
    isLoggedIn: true,
  },
]);

  




  return (
    // in return we can only return one element, so we need to wrap all the elements in a div or a fragment
    <>
      {/* <h1>Hello World</h1>
      <p>This is my first React app</p>
      <button onClick={handleClick}>Click here</button>
      <button onClick={handleClickParameter}>Click here with parameter</button>
      <button onClick={() => handleClickWithParam("John")}>
        Click here with parameter
      </button>
      <p>string: {name}</p>
      <p>number: {age}</p>
      <p>boolean: {isLoggedIn}</p>
      <p>object name: {user.name}</p>
      <p>object age: {user.age}</p>
      <p>object is logged in: {user.isLoggedIn.toString()}</p>

      <p>null value: {n}</p>
      <p>undefined value: {un}</p>
      <p>array: {users}</p> */}


      {/* <div>profiles: {
      
      profiles.map(profile =>{
        return (
          // key is a special prop that is used to identify which items have changed, are added, or are removed. It is important to use keys when rendering lists of elements in React, because it helps React to optimize the rendering process and improve performance. The key should be a unique identifier for each item in the list, such as an id or a name. In this case, we can use the id property of the profile object as the key. key will not be passed to the component as a prop, it is only used by React internally to keep track of the elements in the list. So we can use it like this:

          <div key={profile.id}>
            <h2>{profile.name}</h2>
            <p>Age: {profile.age}</p>
            <p>Email: {profile.email}</p>
          </div>
        );
      })
      
      }</div> */}

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>


      <Read users={userState}  />
      <Create users={userState} setUsers={setUserState} />









    </>

    // always return html elements in a single parent element, if we want to return multiple elements, we need to wrap them in a div or a fragment.

    // if we do not want to use a div which create extra element and space , we can use a fragment, which is a special type of element that does not render anything in the DOM. We can use it like this:
    // return (
    //   <>
    //     <h1>Hello World</h1>
    //     <p>This is my first React app</p>
    //   </>

    // fragment is a shorthand for <React.Fragment></React.Fragment>, so we can also write it like this:
    // return (
    //   <Fragment>
    //     <h1>Hello World</h1>
    //     <p>This is my first React app</p>
    //   </Fragment>
    //
  );
};

export default App;
