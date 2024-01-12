const Events = () => {

    const handleMyEvent = () => {

    }

    return (
    <div>
        <div>
            <button onClick={handleMyEvent()}>Clique Event!</button>
        </div>
        <div>
            <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
            <button onClick={() => {if(true){
                console.log("Isso não deveria aparecer");
            }}}>Clica aqui por favor</button>
        </div>
    </div>
    );
};

export default Events;