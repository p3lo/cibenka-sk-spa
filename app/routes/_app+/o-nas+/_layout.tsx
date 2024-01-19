import { Link, Outlet } from '@remix-run/react'

function ONasLayout() {
  return (
    <div className="mx-2 my-10 flex flex-col md:mx-[15%]">
      <div className="flex flex-col space-y-2">
        <Link to="/" className="flex items-end justify-end text-xs opacity-50">
          ← Domov
        </Link>
        <div className="prose prose-sm max-w-none">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default ONasLayout
