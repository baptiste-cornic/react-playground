// Correction exo9
function App() {
  const [inputs, setInputs] = React.useState({
    text : '',
    essay: '',
    flavor : 'mango'
  })

  const handleChange = (e) => {
    e.preventDefault();
    let { name, value} = e.target
    setInputs(previousState => ({
      ...previousState,
      [name] : value
    }))
  }

  return (
    <React.Fragment>
      <label><input type="text" name="text" value={inputs.text} onChange={handleChange} /></label>
      <label><textarea name="essay" value={inputs.essay} onChange={handleChange}></textarea></label>
      <label>
        <select name="flavor" value={inputs.flavor} onChange={handleChange}>
          <option value="grapefruit">Pamplemousse</option>
          <option value="lime">Citron vert</option>
          <option value="coconut">Noix de coco</option>
          <option value="mango">Mangue</option>
        </select>
      </label>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.querySelector("#app"));