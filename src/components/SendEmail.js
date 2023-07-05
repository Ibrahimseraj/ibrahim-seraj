import emailjs from 'emailjs-com';

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
    'service_ghxw8fk',
    'template_hvspwtp',
    e.target,
    '0fRQzaM-iEHSQMQ_p'
    ).then(res=>{
      alert('succsefully sended!');
  }).catch(err=> alert('Something went wrong'));
}


export default sendEmail;