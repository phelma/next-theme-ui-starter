import Head from 'next/head'
import Link from 'next/link'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { useEffect } from 'react'
import { useUser } from '../firebase/context'
import firebase from '../firebase/clientApp'

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  signInSuccessUrl: '/signedIn',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
}

export default function Home() {
  return (

      <main>
        <h1>Log in</h1>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
          uiCallback={ui => {
            console.log({ui})
          }}
        />
      </main>

  )
}
