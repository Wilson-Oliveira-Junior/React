const TemplateExpressions = () => {
    const name = "Wilson";
    const data = {
        age: 29,
        job: "Programmer",
    };

    return(
        <div>
            <h1>Olá {name}, tudo bom?</h1>
            <p>Você atua como {data.job}</p>
            <p>{console.log("JSX React")}</p>
        </div>
        );
};

export default TemplateExpressions;