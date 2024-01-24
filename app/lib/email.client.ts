import { render } from '@react-email/render'
import { Email } from '~/components/Email'

export function getMailer(
  text: string,
  subject: string,
  from: string,
  name: string,
) {
  const emailHtml = render(Email({ text, name }))
  const url = 'https://resend.mysiacik.com/resend'
  const headers = {
    'Content-Type': 'application/json',
  }
  const data = {
    from: 'web@cibenka.sk',
    to: 'office@cibenka.sk',
    subject: `Dotaz z webu cibenka.sk - ${subject}`,
    html: emailHtml,
  }
  fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
}
