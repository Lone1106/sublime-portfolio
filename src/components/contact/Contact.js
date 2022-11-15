import classes from "./Contact.module.css";

function Contact() {
    return (
        <section className={classes.contact}>
            <h2>Toss me a message</h2>

            <form className={classes.form}>
                <label className={classes.label} htmlFor="name">
                    Name
                </label>
                <input
                    className={classes.input}
                    id="name"
                    placeholder="Your name"
                    type="text"
                    required
                />

                <label className={classes.label} htmlFor="mail">
                    Email
                </label>
                <input
                    className={classes.input}
                    id="mail"
                    placeholder="Your email"
                    type="email"
                    required
                />

                <label className={classes.label} htmlFor="message">
                    Message
                </label>
                <textarea
                    className={classes.area}
                    id="message"
                    placeholder="Your message"
                    maxLength="500"
                    required
                />

                <button className={classes.send} type="submit">
                    Send
                </button>
            </form>
        </section>
    );
}

export default Contact;
