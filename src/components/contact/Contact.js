import Style from './Contact.module.scss';
import { Alert, Grid, Stack } from '@mui/material'
import { Box } from '@mui/system'
import React, { useRef, useState } from 'react'
import { info } from '../../info/Info';
import emailjs from '@emailjs/browser';


export default function Contact({ innerRef }) {
    const textareaRef = useRef();
    const formRef = useRef();
    const [showAlert, setShowAlert] = useState(false)

    function handleInput() {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    };

    function handleSubmit(evt) {
        evt.preventDefault();
        emailjs.sendForm('service_53xjdzf', 'template_6o06j8n', formRef.current, 'gH4jDwgQFrrbpAKxg')
            .then((result) => {
                console.log(result.text);
                setShowAlert(true);
            }, (error) => {
                console.log(error.text);
            });
        evt.target.reset();
    }


    return (
        <Box id="contact" width='70%' mx='auto' ref={innerRef}>
            <hr></hr>
            {showAlert? <Alert severity="success">Success! Thank you</Alert>: null}
            <Grid container justifyContent={'center'} p={3} spacing={5}>
                <Grid item xs={12} md={7}>
                    <form onSubmit={handleSubmit} ref={formRef}>
                        <Stack spacing={3}>
                            <input type="text" name="name" placeholder="Name" sx={{ backgroundColor: 'white', borderColor: 'black', input: { color: "black" } }}></input>
                            <input type="type" name="email" placeholder="Email Address"></input>
                            <textarea
                                name="message"
                                ref={textareaRef}
                                style={{ height: "auto", minHeight: "8rem", overflow: "hidden" }}
                                onInput={handleInput}
                                placeholder="Message"
                            />
                            <button className={Style.coolButton}>Contact Me</button>
                        </Stack>
                    </form>
                </Grid>
                <Grid item xs={12} md={5} display='flex' flexDirection={'column'}>
                    <h3>Email</h3>
                    <h4>kban0208@gmail.com</h4>
                    <h3>Phone</h3>
                    <h4>647 886 5699</h4>
                    <Box p={1} flex={1}>
                        <h1 style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Thanks for visiting!</h1>
                    </Box>
                </Grid>
            </Grid>
        </Box>

    )
}