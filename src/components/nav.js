/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useUser } from '../firebase/context'
import firebase from '../firebase/clientApp'
import Link from 'next/link'
import { Button } from 'theme-ui'


const SignOut = () => {
  return <Button onClick={() => firebase.auth().signOut() }>Sign Out</Button>
}

const Nav = ({ }) => {
  const { loadingUser, user, notSignedIn } = useUser()
  return <nav sx={{minHeight: '40px', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
    <div sx={{maxWidth: 400, mx: 'auto'}}>
      {user && <SignOut />}
      {notSignedIn && <Link href="/login"><Button as="a">Log in</Button></Link>}
    </div>
  </nav>
}

export default Nav
