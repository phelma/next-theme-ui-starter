import { useState, useEffect, createContext, useContext } from 'react'
import firebase from './clientApp'
import { useRouter } from 'next/router'

export const UserContext = createContext()

export default function UserContextComp({ children }) {
  const [user, setUser] = useState(null)
  const [loadingUser, setLoadingUser] = useState(true) // Helpful, to update the UI accordingly.

  useEffect(() => {
    // Listen authenticated user
    const unsubscriber = firebase.auth().onAuthStateChanged(async (user) => {
      try {
        if (user) {
          // User is signed in.
          const { uid, displayName, email, photoURL } = user
          // You could also look for the user doc in your Firestore (if you have one):
          // const userDoc = await firebase.firestore().doc(`users/${uid}`).get()
          setUser({ uid, displayName, email, photoURL })
        } else setUser(null)
      } catch (error) {
        // Most probably a connection error. Handle appropriately.
      } finally {
        setLoadingUser(false)
      }
    })

    // Unsubscribe auth listener on unmount
    return () => unsubscriber()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, loadingUser, notSignedIn: !loadingUser && !user }}>
      {children}
    </UserContext.Provider>
  )
}

// Custom hook that shorthands the context!
export const useUser = () => useContext(UserContext)
export const useMustSignIn = () => {
  const { user, loadingUser, setUser, notSignedIn } = useUser()
  const router = useRouter()
  useEffect(() => {
    if (!loadingUser && !user) {
      console.log('not loading, and no user, redirecting to signin')
      router.push('/login ')
    }
  }, [user, loadingUser])
  return { user, loadingUser, setUser, notSignedIn }
}