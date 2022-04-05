import { Fragment, useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { FaPhone, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaFacebook, FaGithub, FaGitlab } from "react-icons/fa";

export default function ContactPage() {

    // STATE TO SAVE FORM INPUT
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contactNo, setContactNo] = useState(0)
    const [message, setMessage] = useState('')

    //BOOLEAN if form is complete
    const [isComplete, setIsComplete] = useState(false)

    // SEND EMAIL
    function sendEmail(e) {
        e.preventDefault()
        {
            isComplete ?
                fetch('https://powerful-shelf-02321.herokuapp.com/api/portfolio/sendEmail', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        contactNo: contactNo,
                        msg: message
                    })
                })
                    .then((feedback) => {
                        if (feedback.status === 200) {
                            clearInput()
                            Swal.fire({
                                icon: 'success',
                                title: 'Message Sent',
                                text: 'Thank you for sending a message. I will get back to you within the day.'
                            })
                        }
                        else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Unable to send message',
                                text: 'Unable to send email at the moment please try again.'
                            })
                        }
                    })
                :
                Swal.fire({
                    icon: 'info',
                    title: 'Incomplete Form',
                    text: 'Unable to send message. Please complete the form. Thank you!'
                })
        }
    }

    // CLEAR FORM AFTER SENDING
    function clearInput() {
        setName('')
        setEmail('')
        // setContactNo('')
        setMessage('')
    }

    //check if the form is complete
    useEffect(() => {
        if (name !== '' && email !== '' && contactNo !== '' && message !== '') {
            setIsComplete(true)
        } else {
            setIsComplete(false)
        }
    }, [name, email, contactNo, message])


    return (
        <div className="contactDiv">

            {/* GET IN TOUCH TEXT ONLY */}
            <div className="contact-get col-12">
                <h1>GET IN TOUCH</h1>
            </div>

            {/* MESSAGE FORM */}
            <div className="contact-msg col-12 col-md-6">
                <form>
                    <input
                        placeholder="Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                    <input
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    {/* <input
                        placeholder="Contact Number"
                        type="number"
                        value={contactNo}
                        onChange={(e) => setContactNo(e.target.value)}
                        onWheel={(e) => e.target.blur()}
                    ></input> */}
                    <textarea
                        placeholder="Message"
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button
                        className="contact-btn"
                        type="submit"
                        onClick={(e) => sendEmail(e)}

                    //if form is complete set disable to false
                    // disabled={isComplete ? false : true}

                    // style={isComplete ? { background: "pink" } : { background: "#e8acb4" }}
                    >SEND</button>
                </form>

            </div>

            {/* CONTACT INFO */}
            <div className="contact-num col-12 col-md-6" id="page-contact">
                <ul>
                    <li>
                        <FaPhone /> 0999-983-5248 / 0975-687-0864
                    </li>
                    <li>
                        <a className="contactLink" href="mailto:hlgaralde@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope /> hlgaralde@gmail.com
                        </a>
                    </li>
                    <li>
                        <a className="contactLink" href="https://www.linkedin.com/in/hazelgaralde/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="fa-linkedin" /> Hazel Garalde
                        </a>
                    </li>
                    <li>
                        <FaMapMarkerAlt /> Taytay, Rizal, Philippines
                    </li>
                    <li>
                        <a className="contactIcons" href="https://www.facebook.com/hazelgaralde" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a className="contactIcons" href="https://github.com/hazelg21" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a className="contactIcons" href="https://gitlab.com/hazelg21" target="_blank" rel="noopener noreferrer">
                            <FaGitlab />
                        </a>
                    </li>
                </ul>
            </div>
        </div >
    )
}