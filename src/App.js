// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App() {
//   const [name, setName] = useState('')
//   const [Year, setYear] = useState('')
//   const [add, setAdd] = useState('')
//   const [phone, sePhone] = useState('')
//   const [email, setEmail] = useState('')
//   const handleInputName =(e)=>{
//     setName (e.target.value);
//   }
//   const handleInputYear =(e)=>{
//     setYear (e.target.value);
//   }
//   const currentYear=new Date().getFullYear();
//   const years =currentYear - Year;

//   const handleInpuadd =(e)=>{
//     setAdd (e.target.value);
//   }
//   const handleInputPhone =(e)=>{
//     sePhone (e.target.value);
//   }
//   const handleInputEmail =(e)=>{
//     setEmail (e.target.value);
//   }
  

//   return (
//     <div className="App">
//       <h1>nhap ten:</h1>
//       <input id="type1" type="text" placeholder="name" name="text" onChange={handleInputName}></input>
//       <h1>nhap tuoi:</h1>
//       <input id="type2" type="text" placeholder="name" name="text" onChange={handleInputYear}></input>
//       <h1>dia chi:</h1>
//       <input id="type3" type="text" placeholder="name" name="text" onChange={handleInpuadd}></input>
//       <h1>so dien thoai:</h1>
//       <input id="type4" type="text" placeholder="name" name="text" onChange={handleInputPhone}></input>
//       <h1>email:</h1>
//       <input id="type5" type="text" placeholder="name" name="text" onChange={handleInputEmail}></input>
      

//       <button class="logout" type="submit" id="logout"> đăng nhập</button>
//       <h2>{name}</h2>
//       <h2>{years}</h2>
//       <h2>{add}</h2>
//       <h2>{phone}</h2>
//       <h2>{email}</h2>
//     </div>
//   );
// }

// export default App;


//-------------------------------------------------------------------------------


import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [valInput, setValInput] = useState({    
    name: "",
    age: "",
    adress: "",
    phone: "",
    email: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setValInput({ ...valInput, [name]: value });
  };

  const [isSub, setIsSub] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  console.log("valInput", valInput);

  ///////// way 2 proces get dat from form

  return (
    <div className="App">
      <h1>Nhap ten: </h1>
      <input placeholder="name" name="name" onChange={handleInput}></input>
      <h1>Nhap tuoi: </h1>
      <input placeholder="age" name="age" onChange={handleInput}></input>
      <h1>Nhap dia chi: </h1>
      <input placeholder="adress" name="adress" onChange={handleInput}></input>
      <h1>Nhap sdt: </h1>
      <input placeholder="phone" name="phone" onChange={handleInput}></input>
      <h1>Nhap email: </h1>
      <input placeholder="email" name="email" onChange={handleInput}></input>
      <br />
      <br />
      <br />
      <br />
      <button onClick={handleSubmit}>dang nhap</button>

      <hr  width="80%" size="5px" align="center" />

      <div class="a">
      <table>
        <tr>
          <td><h2>Tên: </h2></td>
          <td>{isSub && <span>{valInput.name}</span>}</td>
          
          
        </tr>
        <tr>
        <td><h2>Tuổi: </h2></td>
        <td>{isSub && <span>{valInput.age}</span>}</td>
        </tr>
        <tr>
        <td><h2>Địa chỉ: </h2></td>
        <td>{isSub && <span>{valInput.adress}</span>}</td>
        </tr> 
        <tr>
        <td><h2>Số điện thoại: </h2></td>
        <td>{isSub && <span>{valInput.phone}</span>}</td>
        </tr>
        <tr>
        <td><h2>Email: </h2></td>
        <td>{isSub && <span>{valInput.email}</span>}</td>
        </tr>     
      </table>
      
      
      
     
      
      
      </div>
      
      
      
      
      
      
      {/* <form onSubmit={handleSubmit}>
      <h1>Nhap ten: </h1>
        <input placeholder="name" name="name" onChange={handleInput}></input>
        <h1>Nhap tuoi: </h1>
        <input placeholder="age" name="age" onChange={handleInput}></input>
        <h1>Nhap dia chi: </h1>
        <input
          placeholder="adress"
          name="adress"
          onChange={handleInput}
        ></input>
        <h1>Nhap sdt: </h1>
        <input placeholder="phone" name="phone" onChange={handleInput}></input>
        <h1>Nhap email: </h1>
        <input placeholder="email" name="email" onChange={handleInput}></input>


        <input type="submit" value="Submit" />
      </form> */}
    </div>
  );
}
      
export default App;



