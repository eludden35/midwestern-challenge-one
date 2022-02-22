import Head from "next/head";
import styles from "../styles/Contact.module.css";

export default function Contact() {
    const onSubmitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>MIDWESTERN - Contact</title>
            </Head>

            <main className="h-100 row contact">
                <div className="col-md-6 d-flex align-items-center">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 text-white contact-words">
                            <h1 className="mb-4">
                                <span className={styles.h1UnderLine}>
                                    Heading
                                </span>{" "}
                                One
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do dos eiusmod tempor
                                incididunt ut labore et trace dolore magna
                                aliqua.
                            </p>
                            <p>
                                Proin sagittis nisl rhoncus mattic rhoncus. At
                                augue eget arcu dictum varius duis at
                                consectetur lorem.
                            </p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>

                <div className="col-md-6 d-flex align-items-center bg-white contactForm">
                    <div className="row w-100">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <h2 className="mb-4">Heading Two</h2>
                            <form onSubmit={(e) => onSubmitHandler(e)}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input
                                            className={styles.inputs}
                                            type="text"
                                            placeholder="First Name"
                                            onInvalid={(e) =>
                                                e.target.setCustomValidity(
                                                    "Required"
                                                )
                                            }
                                            onInput={(e) =>
                                                e.target.setCustomValidity("")
                                            }
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            className={styles.inputs}
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input
                                            className={styles.inputs}
                                            type="text"
                                            placeholder="Title"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            className={styles.inputs}
                                            type="email"
                                            placeholder="Email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <textarea
                                            className={styles.textArea}
                                            placeholder="Message"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-3 d-flex justify-content-center mt-2">
                                        <button
                                            className="btn rounded-0 text-white"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </main>
        </div>
    );
}
