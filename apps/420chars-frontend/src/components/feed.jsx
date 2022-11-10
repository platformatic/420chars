import LoginButton from './login.jsx'
import LogoutButton from './logout.jsx'

import { useAuth0 } from '@auth0/auth0-react'

export default function Feed () {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (!isAuthenticated) {
    return <LoginButton />
  }

  return (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <LogoutButton />
    </div>
  )
}
