import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import SiteLayout from '@components/common/layout/Layout'
import { Divider } from 'antd'

const Test: React.FC = () => {
  const router = useRouter()
  const { submenu } = router.query

  return (
    <SiteLayout>
      <h1>{submenu}</h1>
      <Link href="test/[submenu]" as={`/test/testone`}>
        test1
      </Link>
      <Link href="test/[submenu]" as={`/test/testtwo`}>
        test2
      </Link>
    </SiteLayout>
  )
}

export default Test
