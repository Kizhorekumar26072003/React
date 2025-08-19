//react component name shld be start with capital letter
import New from "./New";

function App() {
  const userData = {
    name:"KK",
    age:25,
    phone:"9585520885",
    email:"kizhorekumar03@gmail.com"
  };
  return (
    <div>
      <h1>HEllo</h1>
      <New 
        // username={userData.name}
        // Age={userData.age}
        // MobileNumber={userData.phone}
        // Mail_Id={userData.email}
        {...userData}
      />
    </div>
    
  )
}

export default App;