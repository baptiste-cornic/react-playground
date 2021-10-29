function NameForm(){
  const [name, setName] = React.useState();

  const handleChange = (event) =>{
    setName(event.target.value);
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    alert('Le nom a été soumis : ' + name);
  }

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Nom :
          <input type="text" onChange={handleChange} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    );
}

function TextArea(){

  const [text, setText] = React.useState();

  const handleChange = (event) =>{
    setText(event.target.value);
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    alert('Le nom a été soumis : ' + text);
  }

  return(
    <form onSubmit={handleSubmit}>
        <label>
          Essay:
          <textarea  onChange={handleChange} />
        </label>
        <input type="submit" value="Envoyer" />
    </form>
  )
}

function SelectForm(){
  const [select, setSelect] = React.useState();

  const handleChange = (event) =>{
    setSelect(event.target.value);
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    alert('Le nom a été soumis : ' + select);
  }

  return(
    <form onSubmit={handleSubmit}>
        <label>
          Choisissez votre parfum favori :
          <select onChange={handleChange}>
            <option value="grapefruit">Pamplemousse</option>
            <option value="lime">Citron vert</option>
            <option value="coconut">Noix de coco</option>
            <option value="mango">Mangue</option>
          </select>
        </label>
        <input type="submit" value="Envoyer" />
      </form>
  )
}

function App(){
  return(
    <React.Fragment>
      <NameForm />
      <TextArea />
      <SelectForm />
    </React.Fragment> 
  )
}

ReactDOM.render(<App/>, document.querySelector('#app'))