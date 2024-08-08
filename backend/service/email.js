const nodemailer = require('nodemailer')
const mailgen = require('mailgen')
require('dotenv').config()

const sendEmail = () => {
    let config = {
        service : "gmail",
        auth: {
            user : process.env.NODE_JS_APP_USER,
            pass : process.env.NODE_JS_APP_PASSWORD
        },
        tls:{
            rejectUnauthorized : false
        }
    }
    let transporter = nodemailer.createTransport(config)

    let message = {
        from : process.env
    }
}