export default function Form() {
    return (



        <>
            <section className="from-section">
                <form method="POST" >
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

                </form>
            </section>
        </>
    )
}