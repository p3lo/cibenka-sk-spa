import { Turnstile } from '@marsidev/react-turnstile'
import type { MetaFunction } from '@remix-run/node'
import {
  ClientActionFunctionArgs,
  Form,
  Link,
  useActionData,
  useLocation,
} from '@remix-run/react'
import React from 'react'
import { Button } from '~/components/ui/button'
import { Checkbox } from '~/components/ui/checkbox'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'
import { getMailer } from '~/lib/email.client'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Kontakt - Advokátska kancelária JUDr. Jaroslav Čibenka s.r.o.',
    },
    {
      name: 'description',
      content:
        'Získajte bezplatnú odpoveď na Vašu právnu otázku prostredníctvom formulára na našej webovej stránke. Ak je to možné, odpovieme Vám jednoducho. Ak potrebujete vyhotovenie zmluvy, radi Vám poskytneme informáciu o odmene za prípadné vyhotovenie takejto listiny. Navštívte nás ešte dnes a využite profesionálne služby našej advokátskej kancelárie.',
    },
  ]
}

export async function clientAction({ request }: ClientActionFunctionArgs) {
  const cloudflareSecret = process.env.CLOUDFLARE_SECRET
  const endpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
  const formData = await request.formData()
  const token = formData.get('cf-turnstile-response')
  if (token && cloudflareSecret) {
    const body = `secret=${encodeURIComponent(cloudflareSecret?.toString())}&response=${encodeURIComponent(
      token.toString(),
    )}`
    const res = await fetch(endpoint, {
      method: 'POST',
      body,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })
    const data = await res.json()
    if (data && !data.success) {
      return { error: true }
    }
  }

  const name = formData.get('name')
  const email = formData.get('email')
  const subject = formData.get('subject')
  const message = formData.get('message')

  if (!name || !email || !subject || !message) {
    return { error: true }
  }

  getMailer(
    message.toString(),
    subject.toString(),
    email.toString(),
    name.toString(),
  )
  return { error: false }
}

function Kontakt() {
  const data = useActionData<typeof clientAction>()
  const [checked, setChecked] = React.useState(false)
  const [cfStatus, setCfStatus] = React.useState(false)
  let { key } = useLocation()
  function changeChecked() {
    setChecked(prev => !prev)
  }
  React.useEffect(() => {
    setCfStatus(false)
    setChecked(false)
  }, [key])
  return (
    <div className="mx-2 my-10 flex flex-col md:mx-[15%]">
      <div className="flex flex-col space-y-5">
        <Link to="/" className="flex items-end justify-end text-xs opacity-50">
          ← Domov
        </Link>
        <div className="flex flex-col text-sm">
          <h2 className="text-2xl font-semibold">
            Advokátska kancelária JUDr. Jaroslav Čibenka s.r.o.
          </h2>
          <p>F. Urbánka 797/14, 020 01 Púchov</p>
          <p>
            Tel.: <a href="tel:+421 940 505 051">+421 940 505 051</a>
          </p>
          <p>
            E-mail: <a href="mailto:office@cibenka.sk">office@cibenka.sk</a>
          </p>
        </div>
        <div className="flex flex-col text-sm">
          <h3 className="font-semibold">Fakturačné údaje:</h3>
          <p>Advokátska kancelária JUDr. Jaroslav Čibenka s.r.o.</p>
          <p>F. Urbánka 797/14, 020 01 Púchov</p>
          <p>IČO: 47254181</p>
          <p>DIČ: 2024064416</p>
          <p>IČ DPH: SK2024064416</p>
          <p>č. účtu: IBAN: SK39 0900 0000 0050 7610 4167</p>
        </div>
        <div className="flex flex-col text-sm">
          <h2 className="text-xl font-semibold">Kontaktný formulár</h2>
          <p className="font-semibold">
            Po vyplnení formulára Vám odpovieme bezplatne na Vašu otázku, ak
            bude možné na otázku možno jednoducho odpovedať. V prípade potreby
            vyhotovenia zmluvy Vám zašleme informáciu o odmene za prípadné
            vyhotovenie takejto listiny. Následne sa môžete rozhodnúť využijete
            služby našej advokátskej kancelárie.
          </p>
        </div>
        {data &&
          (data.error ? (
            <p className="text-md font-semibold text-red-500">
              Niečo sa pokazilo, skúste poslať správu znova.
            </p>
          ) : (
            <p className="text-md font-semibold text-green-500">
              Vaša správa bola odoslaná.
            </p>
          ))}
        <Form key={key} method="post" className="flex flex-col space-y-5">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Vaše meno *</Label>
            <Input
              type="text"
              id="name"
              placeholder="Meno"
              name="name"
              required
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Váš email *</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              required
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="predmet">Predmet *</Label>
            <Input
              type="text"
              id="predmet"
              placeholder="Predmet"
              name="subject"
              required
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Vaša správa *</Label>
            <Textarea
              className="whitespace-pre-wrap"
              placeholder="Správa"
              id="message"
              required
              name="message"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms2"
              defaultChecked={false}
              onCheckedChange={changeChecked}
            />
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Súhlasím so spracovaním osobných údajov
            </label>
          </div>
          <Turnstile
            siteKey="0x4AAAAAAAELF4hgDHO9jQhV"
            onSuccess={() => setCfStatus(true)}
            options={{ theme: 'light' }}
          />
          {cfStatus && (
            <Button type="submit" disabled={!checked}>
              Odoslať
            </Button>
          )}
        </Form>
      </div>
    </div>
  )
}

export default Kontakt
