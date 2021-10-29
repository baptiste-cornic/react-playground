// correction exo7 avec remontée d'état

function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const toggleIsLoggedIn = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <Greeting isLoggedIn={isLoggedIn} toggleIsLoggedIn={toggleIsLoggedIn} />
    );
}

function Greeting({ isLoggedIn,toggleIsLoggedIn }) {
    return (
        <React.Fragment>
            {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
            <button onClick={toggleIsLoggedIn}>
                {isLoggedIn ? "Se déconnecter" : "Se connecter"}
            </button>
        </React.Fragment>
    );
}

function UserGreeting(props) {
    return <h1>Bienvenue !</h1>;
}

function GuestGreeting(props) {
    return <h1>Veuillez vous inscrire.</h1>;
}  
/*

    App => IsloogedIn = state
    |
    Greeting
        |
        User
        Guest 

    */
ReactDOM.render(<App />, document.getElementById("app"));