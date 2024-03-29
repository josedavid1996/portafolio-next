import { NextApiRequest, NextApiResponse } from 'next'
// import nodemailer from 'nodemailer'

export default async function logoutHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = JSON.parse(req.body)

  console.log(data)
  // 1.Datos del remitente
  // async function main() {
  //   // Generate test SMTP service account from ethereal.email
  //   // Only needed if you don't have a real mail account for testing
  //   const testAccount = await nodemailer.createTestAccount()

  //   // create reusable transporter object using the default SMTP transport
  //   const transporter = nodemailer.createTransport({
  //     host: 'smtp.ethereal.email',
  //     port: 587,
  //     secure: false, // true for 465, false for other ports
  //     auth: {
  //       user: testAccount.user, // generated ethereal user
  //       pass: testAccount.pass // generated ethereal password
  //     }
  //   })

  //   // send mail with defined transport object
  //   const info = await transporter.sendMail({
  //     from: 'redondoperdomojosedavid@gmail.com',
  //     to: `${data.correo},redondoperdomojosedavid@gmail.com`, // list of receivers
  //     subject: 'Hello ✔', // Subject line
  //     text: 'Hello world?', // plain text body
  //     html: '<b>Hello world?</b>' // html body
  //   })

  //   console.log('Message sent: %s', info.messageId)
  //   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //   // Preview only available when sending through an Ethereal account
  //   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  //   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  // }
  // main()
  //   .then((reponse) => res.status(200).json({ res: true, data: reponse }))
  //   .catch((error) => res.status(404).json({ res: false, data: error }))
  res.status(200).json({ res: true, data: 'hola' })
}
