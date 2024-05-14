import React from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Final = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_k9prfzi', 'template_gv2rjlj', form.current, {
            publicKey: 'uOdSOwgp3WIsAcXu3',
            })
            .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
            );
    };

return (
    <div className='home'>
         <div className="">
            <form ref={form} className='d-flex ' onSubmit={sendEmail}>
            
            <input type="text" placeholder='adin' name="user_name" />
            
            <input className='d-none' type="email" value={"tu8dhdtwy@code.edu.az"} name="user_email" />
      
            <textarea name="message"  placeholder='mesajin' />
            <input type="submit" value="Send" />
      </form>
        </div>
    <div className="ilkmesaj">
        <img src="https://media.tenor.com/9Vz3E_VgrEEAAAAi/sorry.giff" alt="" />
        <div className="mesaj">
            <p>butun bura qeder geldiyin ucun cox sogol mesaj gondermeyi unutma xais</p>
            <div className="cavab">

            </div>
        </div>
    </div>
</div>
)
}

export default Final