


function handleSubmit(event) {
    event.preventDefault()
    console.log("submited")
    const formEl = event.currentTarget
    const formData = new FormData(formEl)
    console.log(formData.get("email"))
    console.log(formData.get("password"))
    console.log(formData.get("Super Sayian Status"))
    console.log(formData.get("msg"))
    formEl.reset()

}
export default function Form() {
    return (



        <>
            <section className="form-section">
                <form className="form-inputs" method="POST" onSubmit={handleSubmit}>
                    <label> Email:
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="example@hotmail.com"
                        />
                    </label>

                    <label> Password:
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="********"
                        />
                    </label>
                    <label>
                        Message:
                        <textarea
                            id="msg"
                            name="msg"
                            placeholder="i want to contact about.." > </textarea>
                    </label>

                    <fieldset className="fieldset-radio">
                        <legend>Super Sayian Status</legend>
                        <label>

                            <input
                                type="radio"
                                name="Super Sayian Status"
                                value="Super Sayian" />
                            Super Sayian
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="Super Sayian Status"
                                value="Super Sayian 2" />
                            Super Sayian 2
                        </label>
                    </fieldset>



                    <button > Submit</button>
                </form>
            </section>
        </>
    )
}