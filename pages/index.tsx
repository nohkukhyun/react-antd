import React, { useState, useEffect } from 'react'
import SiteLayout from '@components/common/layout/Layout'
import Member from '@src/components/members/member'
import Login from '@src/components/login'

const Home: React.FC = () => {
  const [key, setKey] = useState(undefined)

  useEffect(() => {
    //토큰값을 찾는다
    setKey(localStorage.getItem('access_token'))
  }, [])

  return (
    <>
      {!key ? (
        <Login />
      ) : (
        <SiteLayout>
          <Member />
        </SiteLayout>
      )}
    </>
  )
}

export default Home
