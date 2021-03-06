import { useState } from "react";

function ContactMe() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [buttonText, setButtonText] = useState("Submit");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sending");
        setButtonText("Sending");
        let data = {
            name,
            email,
            phone,
            subject,
            message,
        };

        try {
            await fetch("/api/mail", {
                "method": "POST",
                "headers": { "content-type": "application/json" },
                "body": JSON.stringify(data),
            })
            // setTimeout(() => reset(), 2000);
            setName("");
            setEmail("");
            setPhone("");
            setSubject("");
            setMessage("");
        } catch (error) {
            console.log(error);
        }
        setButtonText("Submit");

        
        
        // .then((res) => {
        //     console.log("Response received");
        //     if (res.status === 200) {
        //         console.log("Response succeeded!");
        //         alert("Successfully submitted a message!");
        //         setName("");
        //         setEmail("");
        //         setPhone("");
        //         setSubject("");
        //         setMessage("");
        //     }
        // });
    };

    return (
        <div
            className="md:grid md:grid-cols-2 md:gap-x-10 mx-5 md:mx-auto md:max-w-4xl py-20 items-center font-merriweather"
            id="ContactMe"
        >
            <div className="text-center">
                <h1 className="text-4xl font-bold">Get In Touch</h1>
                <p className="mt-5 text-lg mb-10 lg:mb-0">
                    Feel free to contact me by filling up the<br />
                    form or sending me an E-mail if you have any inquiries!
                </p>
                <p className="mt-5 font-light hidden md:inline-block p-2 border border-black border-opacity-50 cursor-pointer hover:border-opacity-100">
                    <a href="mailto:jonathan.thamrun@gmail.com">jonathan.thamrun@gmail.com</a>
                    
                </p>
            </div>

            <form className="mt-0 w-full md:max-w-lg lg:max-w-xl lg:mt-0 p-7 md:p-10 bg-white text-black rounded-lg text-center border border-1">
                <div className="flex flex-col space-y-5">
                    <input
                        value={name}
                        type="text"
                        placeholder="Name"
                        className="border-2 border-black border-opacity-25 outline-none rounded-md p-2 px-3 focus:border-opacity-100 text-sm hover:border-opacity-75"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <input
                        value={email}
                        type="text"
                        placeholder="Email"
                        className="border-2 border-black border-opacity-25 outline-none rounded-md p-2 px-3 focus:border-opacity-100 text-sm hover:border-opacity-75"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <input
                        value={phone}
                        type="text"
                        placeholder="Phone"
                        className="border-2 border-black border-opacity-25 outline-none rounded-md p-2 px-3 focus:border-opacity-100 text-sm hover:border-opacity-75"
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                    />
                    <input
                        value={subject}
                        type="text"
                        placeholder="Subject"
                        className="border-2 border-black border-opacity-25 outline-none rounded-md p-2 px-3 focus:border-opacity-100 text-sm hover:border-opacity-75"
                        onChange={(e) => {
                            setSubject(e.target.value);
                        }}
                    />
                    <textarea
                        value={message}
                        rows="4"
                        type="text"
                        placeholder="Message"
                        className="border-2 border-black border-opacity-25 outline-none rounded-md p-2 px-3 focus:border-opacity-100 text-sm hover:border-opacity-75"
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                    />
                </div>

                <button
                    type="submit"
                    className="inline-block bg-black text-white mt-5 rounded-full px-7 py-2 text-md outline-none"
                    onClick={(e) => {
                        handleSubmit(e);
                    }}
                >
                    {buttonText}
                </button>
            </form>
        </div>
    );
}

export default ContactMe;
