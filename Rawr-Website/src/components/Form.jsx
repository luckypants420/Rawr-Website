


function handleSubmit(event) {
    event.preventDefault()
    console.log("submited")
    const formEl = event.currentTarget
    const formData = new FormData(formEl)
    console.log(formData.get("email"))
    console.log(formData.get("password"))
    console.log(formData.get("Super Sayian Status"))
    console.log(formData.get("msg"))
    const races = formData.getAll("Race")
    console.log(formData.get("favColor"))

    const data = Object.fromEntries(formData.entries())
    const allData = {
        ...data,
        races
    }
    console.log(allData)
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
                            defaultValue="example@hotmail.com"
                        />
                    </label>

                    <label> Password:
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="********"
                            defaultValue="example123"

                        />
                    </label>
                    <label>
                        Message:
                        <textarea
                            id="msg"
                            name="msg"
                            placeholder="i want to contact about.."
                            defaultValue="lets talk about..."
                        >
                        </textarea>
                    </label>

                    <fieldset className="fieldset-radio">
                        <legend>Super Sayian Status</legend>
                        <label>

                            <input
                                type="radio"
                                name="Super Sayian Status"
                                value="Super Sayian"
                                defaultChecked />
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

                    <fieldset className="fieldset-checkbox">
                        <legend>Race</legend>
                        <label>

                            <input
                                type="checkbox"
                                name="Race"
                                value="Namakian"
                                defaultChecked />
                            Namakian
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="Race"
                                value="Sayian " />
                            Sayian
                        </label>
                    </fieldset>                 
                    <label >
                        <select id="favColor" name="favColor">
                            <option disabled> -- Choose Color </option>
                            <option defaultChecked value="Red"> Red</option>
                            <option value="White"> White</option>
                            <option value="Black"> Black</option>
                            <option value="Blue"> Blue</option>
                        </select>
                    </label>
            


                    <button > Submit</button>
                </form>
            </section>
        </>
    )
}