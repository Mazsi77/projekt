import Form from "./Form";


function IdopontSection() {

    return (
        <section id="idopont">
            <h2>Időpont foglalása</h2>
            <div className="idopontWrapper">
                <div className="img" style={{backgroundImage: 'url(./images/form.jpg)'}}></div>
                <Form />
            </div>
        </section>
    )
}

export default IdopontSection
