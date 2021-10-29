function User(){

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersObject => setUsers(usersObject))
  }, [])

  const [users, setUsers] = React.useState([]);

  console.log(users);
  
  return(
    <div>
      {users.map((user) =>(
        <ul key={user.id}>
          <li >{user.name}</li>
          <li>{user.email}</li>
          <li>{user.company.name}</li>
          <li>{user.phone}</li>
          <li>{user.website}</li>
        </ul> 
      ))}
    </div>
  )
} 

  ReactDOM.render(
    <User />,
    document.querySelector('#app')
  );
  