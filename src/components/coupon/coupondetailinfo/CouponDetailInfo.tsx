import React from 'react'
import { Descriptions } from 'antd'
import { DetailSectionWrap } from 'styles/common/style'
import { timeToDate, changeToLineUpName } from '@utils/common'

interface CouponDetailInfoProps {
  detail: any
}

const CouponDetailInfo: React.FC<CouponDetailInfoProps> = ({ detail }) => {
  return (
    <>
      <DetailSectionWrap>
        <Descriptions bordered column={2} title="쿠폰 정보">
          <Descriptions.Item label="판매처">
            {changeToLineUpName(detail?.licenseTypeCode)}
          </Descriptions.Item>
          <Descriptions.Item label="이름">{detail?.name}</Descriptions.Item>
          <Descriptions.Item label="타입">
            {changeToLineUpName(detail?.licenseTypeCode)}
          </Descriptions.Item>
          <Descriptions.Item label="메모">{detail?.description}</Descriptions.Item>
          <Descriptions.Item label="만료일자">
            {timeToDate(detail?.expirationAsTimestamp)}
          </Descriptions.Item>
          <Descriptions.Item label="사용 유효 기간">{`${detail?.codeExpiration}초`}</Descriptions.Item>
          <Descriptions.Item label="할인금액">{detail?.amount}</Descriptions.Item>
          <Descriptions.Item label="남은 쿠폰 수">
            {!detail?.singleCode ? detail?.stock : '무제한'}
          </Descriptions.Item>
        </Descriptions>
      </DetailSectionWrap>
    </>
  )
}

export default CouponDetailInfo
