import React, { useRef } from 'react';
import './Contact.css'
import contactImg from '../../../images/my/about-9.jpg'
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';


const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const form = useRef();
    // const onSubmit = data => {
    //     console.log(data)
    //     reset()
    // };
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y52o7jr', 'template_n6o99bj', e.target, 'user_TjnMJ4Kh1pbAUhNvEvLRG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className="about-container">
            {/* <h4 className="text-warning">About</h4> */}
            <Row>
                <Col xs={12} md={6}>
                    <img className="img-fluid image-about" src={contactImg} alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <form ref={form} onSubmit={sendEmail}>

                        <input className="contact" type="text" name="name" placeholder="name" />

                        <input className="contact" type="email" name="email" placeholder="email" />

                        <input className="contact" type="text" name="subject" placeholder="subject" />

                        <textarea className="contact" name="message" placeholder="write massage" />
                        <input className="button" type="submit" value="Send" />
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;