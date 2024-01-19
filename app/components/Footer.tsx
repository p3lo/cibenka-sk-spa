import { Link } from '@remix-run/react'
import React from 'react'
import { MdEmail, MdPhone } from 'react-icons/md'

import { ClientOnly } from 'remix-utils/client-only'
import Map from './Map'

function Footer() {
  const mapHeight = '150px'
  return (
    <div className="grow bg-slate-100">
      <div className="mx-2 my-10 flex md:mx-[15%] ">
        <div className="grid w-full justify-evenly md:grid-cols-2 lg:grid-cols-3">
          <div className="mb-8 flex flex-col space-y-8">
            <h3 className="pl-5 text-lg font-semibold">
              <span className="text-red-500">K</span>ontakt
            </h3>
            <div className="flex flex-col space-y-4 text-xs">
              <p className="font-semibold">
                Advokátska kancelária JUDr. Jaroslav Čibenka s.r.o.
              </p>
              <p>F. Urbánka 797/14, 020 01 Púchov</p>
              <div className="flex items-center space-x-1">
                <MdPhone />
                <a href="tel:+421 940 505 051">+421 940 505 051</a>
              </div>
              <div className="flex items-center space-x-1">
                <MdEmail />
                <a href="mailto:office@cibenka.sk">office@cibenka.sk</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-8">
            <h3 className="pl-5 text-lg font-semibold">
              <span className="text-red-500">R</span>ýchle odkazy
            </h3>
            <div className="flex flex-col space-y-4 text-sm">
              <Link to="/podla-odvetvia/obcianske-pravo">Občianske právo</Link>
              <Link to="/sluzby/vymahanie-pohladavok">
                Vymáhanie pohľadávok
              </Link>
              <Link to="/sluzby/sluzby-pre-firmy">Služby pre firmy</Link>
              <Link to="/sluzby/sluzby-pre-obcanov">Služby pre občanov</Link>
            </div>
            <div className="flex flex-col space-y-2"></div>
          </div>
          <div className="flex flex-col space-y-8">
            <h3 className="pl-5 text-lg font-semibold">
              <span className="text-red-500">K</span>de nás nájdete
            </h3>
            <div className="flex flex-col space-y-2">
              <Map height={mapHeight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
