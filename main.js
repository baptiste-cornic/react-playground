function App(){

  return(
    <div>
      <BaseNumberInput />
    </div>
  )
}

function BaseNumberInput(){

  const [decimal, setDecimal] = React.useState(0);
  const [binaire, setBinaire] = React.useState(0);  

  const handleChange = (event) => {

    setDecimal(event.target.value);

    setBinaire((decimal-0).toString(2));

  } 

  return(
    <React.Fragment>
      <label><input type="text" value={decimal} name="decimal" onChange={handleChange}/></label>

    </React.Fragment>
    
  )
}

// a corriger c'est pas ca du tout

ReactDOM.render(<App />, document.querySelector('#app'));