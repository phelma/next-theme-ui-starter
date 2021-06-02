/** @jsxImportSource theme-ui */
import Head from 'next/head'
import Link from 'next/link'
import { useMustSignIn } from '../firebase/context'
import { Spinner } from 'theme-ui'

export default function Add() {
  const { loadingUser, user } = useMustSignIn()

  return (
    <div>
      <main sx={{ mx: 'auto', maxWidth: 1200, px: 2 }}>
        <h1 sx={{ fontWeight: 800 }}>Signed in as {user && user.email}</h1>
        ADD
      </main>
    </div>
  )
}
