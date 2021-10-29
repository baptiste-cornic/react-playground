function Clock(props) {
    const [date, setDate] = React.useState(new Date());
    const [color, setColor] = React.useState('black');
    const intervalRef = React.useRef();

    React.useEffect(() => {
        tick();        
    }, []);
    
    const tick = () => {
        intervalRef.current = setInterval(() => setDate(new Date()), 1000);
    }

    // change a couleur du h2 de facon aleatoire
    function changeColor(){
        setColor(newColor());
    }

// recuperation de moncanvas
    function newColor(){
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        return 'rgb(' + red + ',' + green + ',' + blue + ')';        
    }

    function blackColor(){
        setColor("black");
    }

    const stopTime = () => {
        clearInterval(intervalRef.current);
    }
    
    return (
        <div>
            <h1>Hello world</h1>
            <h2 style={{color: color}}>Il est {date.toLocaleTimeString()}.</h2>
            <button onClick={changeColor}>Change color</button>
            <button onClick={blackColor}>Black color</button>
            <button onClick={tick}>ReStart</button>
            <button onClick={stopTime}>Stop</button>
        </div>
        );
}

ReactDOM.render(<Clock />, document.querySelector('#app'));





