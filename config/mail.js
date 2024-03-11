const nodemailer = require('nodemailer');

const mailsend= async (receiver,subject,template) => {
    try{
   //config for nodemailer
    const transporter = await nodemailer.createTransport({
        service:process.env.MAIL_SERVICE,
        port:process.env.MAIL_PORT,
        host:process.env.MAIL_HOST,
        auth:{
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS
        }
    })
    //email sender
    let res = await transporter.sendMail({
        from: "Email-API",
        to: receiver,
        subject: sub,
        html:`<div> ${template}</div>`
    })
    return res
    
    } catch (err){
        return err.message
    }
}

module.exports = mailsend