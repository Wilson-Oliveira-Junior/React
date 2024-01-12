const Events = () => {

    const handleMyEvent = () => {

    }

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando isso!</h1>;
        }else{
            return <h1>Tmabém posso rendenizar isso!</h1>;
        }
    };

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
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
    );
};

export default Events;