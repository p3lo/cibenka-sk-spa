import * as React from 'react'
import { Html } from '@react-email/html'

export function Email({ text, name }: { text: string; name: string }) {
  const message = text.split(/\r?\n/)
  return (
    <Html lang="en">
      <div className="flex flex-col space-y-3">
        <div className="flex space-x-2">
          <h3 className="font-bold">Meno:</h3>
          <p className="text-sm">{name}</p>
        </div>
        <div className="flex space-x-2">
          <h3 className="font-bold">Správa:</h3>
          <div className="flex flex-col text-sm">
            {message.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </Html>
  )
}
