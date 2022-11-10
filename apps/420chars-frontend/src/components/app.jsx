import { Auth0Provider } from "@auth0/auth0-react";
import Feed from './feed.jsx'

export default function App () {
  return <Auth0Provider
    domain="420chars-dev.us.auth0.com"
    clientId="Rw15coWXqXnAc5HrgT1ExQnQ2xRf1g78"
    redirectUri={window.location.origin}
    audience="https://420chars-dev.us.auth0.com/api/v2/"
    scope="read:current_user">

    <Feed />
  </Auth0Provider>
}
