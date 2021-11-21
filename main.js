function App(){

  return(
    <div>
      <BaseNumberInput />
    </div>
  )
}

function BaseNumberInput(){
/*
  const [decimal, setDecimal] = React.useState();
  const [binaire, setBinaire] = React.useState();
*/
  const [inputs, setInputs] = React.useState({
    decimal : '',
    binaire : ''
  })

  const handleChange = (event) => {
    //setDecimal(event.target.value);

    setInputs({...inputs, decimal: event.target.value})
    console.log(inputs);
    setInputs((inputs.decimal-0).toString(2));
    //console.log((decimal-0).toString(2) + ' le binaire normalement');
    //console.log(binaire);
  } 

//  console.log(binaire);


  return(
    <React.Fragment>
      <label><input type="text" value={inputs.decimal} name="decimal" onChange={handleChange}/></label>
      <label><input type="text" value={inputs.binaire} name="binaire" /></label>
    </React.Fragment>
    

  )
}

ReactDOM.render(<App />, document.querySelector('#app'));