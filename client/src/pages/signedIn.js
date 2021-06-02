/** @jsxImportSource theme-ui */
import Head from 'next/head'
import Link from 'next/link'
import { useMustSignIn } from '../firebase/context'
import { Spinner } from 'theme-ui'
import { useRouter } from 'next/router'

export default function Home() {
  const { loadingUser, user } = useMustSignIn()
  if (loadingUser)
    return (
      <div
        sx={{
          minHeight: '100vh',
          minWidth: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Spinner />
      </div>
    )
  return (
    <div>
      <main sx={{ mx: 'auto', maxWidth: 1200, px: 2 }}>
        <h1 sx={{ fontWeight: 800 }}>Signed in as {user && user.email}</h1>
      </main>
    </div>
  )
}
