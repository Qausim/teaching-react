import './App.css';
import { useCallback, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';


// const Persons = () => {
//   // do not bother yourself with the upper part before the JSX
//   const [persons, setPersons] = useState([]);

//   const addPerson = () => {
//     const clonedPersons = [...persons];
//     clonedPersons.push({ id: uuidV4() });
//     setPersons(clonedPersons);
//   }

//   const getRemovePerson = (index) => {
//     return (e) => {
//       console.log('IMMEDIATELY: ', index, ' - ', e.target.textContent);
//       const clonedPersons = [...persons];
//       clonedPersons.splice(index, 1);
//       setPersons(clonedPersons);

//       setTimeout(() => {
//         console.log('LATER: ', index, ' - ', e.target.textContent);
//       }, 5000);
//     };
//   }

//   return (
//     <div style={{padding: 32}}>
//       <button onClick={addPerson}>Add</button>
//       {
//         persons.map(({ id }, index) => (
//           <p key={id}>
//             {index}:{" "}
//             <input type="text" />{" "}
//             <button
//               onClick={getRemovePerson(index)}
//             >
//               Purge {index}
//             </button>
//           </p>
//         ))
//       }
//     </div>
//   );
// }

const List = (props) => {
  const renderItem = props.renderItem || ((item) => (
    <div key={item.id}>
      <p>Name: {item.name}</p>
      <p>age: {item.age}</p>
    </div>
  ));
  
  return props.list.map(renderItem);
};

const App = () => {
  const teachers = [
    {
      id: 1,
      name: 'Ajanlekoko',
      age: 500,
    },
    {
      id: 2,
      name: 'Olaiya',
      age: 36,
    }
  ];

  const students = [
    {
      id: 1,
      name: 'Bolaji',
      age: 12,
    },
    {
      id: 2,
      name: 'Titi',
      age: 15,
    },
  ];

  const parents = [
    {
      id: 1,
      address: 'In the trenches',
      fullName: 'Bola Olatedun',
    },
    {
      id: 2,
      address: 'Somewhere in between',
      fullName: 'John Doe',
    },
  ];

  return (
    <div className="App">
      <List list={teachers} />
      <List list={students} />
      <List
        list={parents}
        renderItem={(item) => {
          return (
            <div key={item.id}>
              <p>Fullname: {item.fullName}</p>
              <p>Address: {item.address}</p>
            </div>
          );
        }}
      />
    </div>
  );
}

export default App;
