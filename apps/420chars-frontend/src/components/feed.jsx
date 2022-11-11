import LoginButton from './login.jsx'
import LogoutButton from './logout.jsx'
import { createClient, Provider } from 'urql'
import { useState, useEffect } from 'react'
import Timeline from './timeline.jsx'

import { useAuth0 } from '@auth0/auth0-react'

const client = createClient({
  url: 'http://127.0.0.1:3042/graphql',
  requestPolicy: 'network-only',
  fetchOptions: () => {
    const token = getToken()
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    }
  }
})

function getToken () {
  return localStorage.getItem('token');
}

export default function Feed () {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0()
  const [token, setToken] = useState(null)

  useEffect(() => {
    const getToken = async () => {
      if (isAuthenticated) {
        const accessToken = await getAccessTokenSilently({
          audience: 'https://420chars-dev.us.auth0.com/api/v2/',
          scope: 'read:current_user'
        })

        localStorage.setItem('token', accessToken)

        setToken(accessToken)
      }
    }

    getToken()
  }, [getAccessTokenSilently, isAuthenticated]);

  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (!isAuthenticated) {
    return <LoginButton />
  }

  return <div>
    <img src={user.picture} alt={user.name} />
    <h2>{user.name}</h2>
    <p>{user.email}</p>
    <LogoutButton />
    <Provider value={client}>
      <Timeline />
    </Provider>
  </div>
}
