import type { MetaFunction } from '@remix-run/react'
import { Outlet } from '@remix-run/react'
import Footer from '~/components/Footer'
import Header from '~/components/Header'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Advokátska kancelária JUDr. Jaroslav Čibenka s.r.o.',
    },
    {
      name: 'description',
      content:
        'Sme advokátska kancelária poskytujúca právne služby a právne poradenstvo v oblasti slovenského a českého práva.',
    },
  ]
}

export default function Layout() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <div className="w-full flex-1">
        <Outlet />
      </div>
      <div className="flex">
        <Footer />
      </div>
    </div>
  )
}
