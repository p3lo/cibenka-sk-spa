import { Outlet } from '@remix-run/react'

function AktualityLayout() {
  return (
    <div className="flex w-full grow">
      <div className="mx-2 my-10 w-full  md:mx-[15%]">
        <Outlet />
      </div>
    </div>
  )
}

export default AktualityLayout
