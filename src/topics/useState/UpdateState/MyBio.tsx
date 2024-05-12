import { useState } from "react";

interface Bio {
  name: string | null;
  age: number | null;
  gender: string | null;
}

export const MyBio = () => {
  /* 
    Instead of declaring multiple state per info e.g.:

    const [name, setName] = useState('John Doe')
    const [age, setAge] = useState(30)
    const [gender, setGender] = useState('Male')
    */

  // Declare single useState and pass an object
  const [data, setData] = useState<Bio>({
    name: null,
    age: null,
    gender: null,
  });
  const { name, age, gender } = data;

  return (
    <div>
      <h1>My Bio</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const formProps = Object.fromEntries(formData.entries());

          setData({
            name: formProps.name as string,
            age: formProps.age as unknown as number,
            gender: formProps.gender as string,
          });
        }}
      >
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input type="number" name="age" />
        </div>
        <div>
          <label htmlFor="gender">Gender: </label>
          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <button type="submit">Update bio</button>
      </form>

      <button
        type="button"
        onClick={() => {
          /*
            If you want to update single property on the state, 
            it is best practice to use the prev state when updating 
            object to prevent overwriting the state.
          */
          setData((prev) => ({
            ...prev,
            name: "John Doe",
          }));
        }}
      >
        Update name to John Doe
      </button>
    </div>
  );
};
