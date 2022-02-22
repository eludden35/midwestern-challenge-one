import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Contact.module.css";

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:3000/allContent");
    const data = await res.json();
    console.log(data);
    return {
        props: { content: data },
    };
};

export default function Contact({ content }) {
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        title: "",
        email: "",
        message: "",
    });
    const onSubmitHandler = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/contact_form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });
        setForm((prev) => ({
            ...prev,
            first_name: "",
            last_name: "",
            title: "",
            email: "",
            message: "",
        }));
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
                                {
                                    content.filter(
                                        (words) => words.name == "contact_top"
                                    )[0].content
                                }
                            </p>
                            <p>
                                {
                                    content.filter(
                                        (words) =>
                                            words.name == "contact_bottom"
                                    )[0].content
                                }
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
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    first_name: e.target.value,
                                                }))
                                            }
                                            value={form.first_name}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            className={styles.inputs}
                                            type="text"
                                            placeholder="Last Name"
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    last_name: e.target.value,
                                                }))
                                            }
                                            value={form.last_name}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input
                                            className={styles.inputs}
                                            type="text"
                                            placeholder="Title"
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    title: e.target.value,
                                                }))
                                            }
                                            value={form.title}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            className={styles.inputs}
                                            type="email"
                                            placeholder="Email"
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    email: e.target.value,
                                                }))
                                            }
                                            value={form.email}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <textarea
                                            className={styles.textArea}
                                            placeholder="Message"
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    message: e.target.value,
                                                }))
                                            }
                                            value={form.message}
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
