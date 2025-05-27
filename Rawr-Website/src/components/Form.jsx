


function handleSubmit(event) {
    event.preventDefault()
    console.log("submited")
    const formEl = event.currentTarget
    const formData = new FormData(formEl)
    console.log(formData.get("email"))
    console.log(formData.get("password"))
    formEl.reset()

}
export default function Form() {
    return (



        <>
            <section className="form-section">
                <form className="form-inputs" method="POST" onSubmit={handleSubmit}>
                    <label> Email:
                        <input
                            type="email"
                            name="email"
                            placeholder="example@hotmail.com"
                        />
                    </label>

                    <label> Password:
                        <input
                            type="password"
                            name="password"
                            placeholder="********"
                        />
                    </label>
                    <button > Submit</button>
                </form>
            </section>
        </>
    )
}