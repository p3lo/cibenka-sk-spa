import { Link } from '@remix-run/react'
import React from 'react'

function AktualityCard({
  image,
  title,
  text,
  link,
}: {
  image: string
  title: string
  text: string
  link: string
}) {
  return (
    <div className="flex w-full flex-1 flex-col space-y-3">
      <img className="h-[50%] object-cover" src={image} alt={title} />
      <Link className="px-2 text-2xl font-semibold" to={link}>
        {title}
      </Link>

      <p className="px-2 text-sm">{text}</p>
      <Link className="flex justify-end px-2 text-xs text-red-500" to={link}>
        Čítaj viac
      </Link>
    </div>
  )
}

export default AktualityCard
