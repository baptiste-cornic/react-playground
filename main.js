// Base pour l'exo 5
/*
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
        () => this.tick(),
        1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
        date: new Date()
    });
    }

    render() {
        return (
        <div>
            <h1>Bonjour, monde !</h1>
            <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }
}
*/

function Clock(){
    const [date, setDate] = React.useState(new Date());

    React.useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
            //console.log(date);
        }, 1000);
    });

    return(
        <div>
            <h1>Bonjour, monde !</h1>
            <h2>Il est {date.toLocaleTimeString()}.</h2>
        </div>
    )
}

ReactDOM.render(
    <Clock />,
    document.getElementById('app')
);