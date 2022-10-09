import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props
  const contentRef = useRef()

  useEffect(() => {
    // 获取selectIndex对应的item
    const selectItemEl = contentRef.current.children[selectIndex]
    const itemLeft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth
    // 获取content宽度
    const contentWidth = contentRef.current.clientWidth
    const contentScroll = contentRef.current.scrollWidth
    // 获取selectIndex滚动的距离
    let distance = itemLeft + 0.5 * itemWidth - 0.5 * contentWidth
    // 特殊情况
    if (distance < 0) distance = 0 // 左边特殊情况处理
    const totalDistance = contentScroll - contentWidth
    if (distance > totalDistance) distance = totalDistance // 右边特殊情况处理
    // 改变位置
    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex])
  return (
    <IndicatorWrapper>
      <div className='i-content' ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicator