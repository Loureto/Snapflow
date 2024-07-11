import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <div className='flex h-screen w-full flex-col'>
      <h1>Aplicação</h1>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
