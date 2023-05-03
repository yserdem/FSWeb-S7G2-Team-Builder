import './App.css';
import { useState } from 'react';
import NewMember from './components/NewMember';



function App() {
  const [people, setPeople] = useState([
    {
      name: 'Sinan Erdem',
      email: 'y.sinanerdem@gmail.com',
      role: 'Öğrenci'
    },
    {
      name: 'Foo Boo',
      email: 'foo@gmail.com',
      role: 'Backend Dev'
    }
  ]);

  const clickHandler = (newMember) => {
    setPeople([...people, newMember])
  }

  return (
    <div>
      <div>üyeler: 
        {
          people.map((element, index) => {
            return(
              <div key={index}>
                <div>Üye {index +1}:</div>
                <div>İsim: {element.name} E-Posta Adresi: {element.email} Rol: {element.role}</div>
              </div>
            )
          })
        } </div>
      <NewMember clickHandler={clickHandler}/>
    </div>
  );
}

export default App;
