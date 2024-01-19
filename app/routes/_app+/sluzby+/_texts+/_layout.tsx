import { Outlet } from '@remix-run/react'

function AktualityLayout() {
  return (
    <div className="prose prose-sm max-w-full">
      <Outlet />
    </div>
  )
}

export default AktualityLayout
