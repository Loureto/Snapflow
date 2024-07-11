import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <div className='flex h-screen w-full flex-col'>
      <h1>Autenticação</h1>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
