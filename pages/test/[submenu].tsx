import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import SiteLayout from '@components/common/layout/Layout'
import Counter from '@src/components/counter'

const Testone: React.FC = () => {
  const router = useRouter()
  const { submneu } = router.query

  return (
    <SiteLayout defaultKey={'8-1'} defaultOpenKeys={['sub4']}>
      <div>
        asdad
        <Counter />
      </div>
    </SiteLayout>
  )
}

export default Testone
