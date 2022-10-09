import PropTypes from 'prop-types'
import React, { memo, useRef } from 'react'
import { ItemWrapper } from './style'
import Rating from '@mui/material/Rating';
import { Carousel } from 'antd';
import IconArrowLeft from '@/asset/svg/icon-arrow-left';
import IconArrowRight from '@/asset/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import { useState } from 'react';
import classNames from 'classnames';

const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%', itemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)

  const sliderRef = useRef()
  // 事件处理
  function controlClickHandle(isRight = true) {
    isRight ? sliderRef.current.next() : sliderRef.current.prev()
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    const length = itemData.picture_urls.length 
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0
    setSelectIndex(newIndex)
  }
  function itemClickHandle() {
    if (itemClick) itemClick(itemData)
  }
  // 子元素赋值
  const pictureElement = (
    <div className='cover'>
      <img src={itemData.picture_url} alt="" />
    </div>
  )
  const sliderElement = (
    <div className='slider'>
      <div className='control'>
        <div className='btn left' onClick={e => controlClickHandle(false)}>
          <IconArrowLeft width='30' height='30'/>
        </div>
        <div className='btn right' onClick={e => controlClickHandle(true)}>
          <IconArrowRight width='30' height='30'/>
        </div>
      </div>
      <div className='indicator'>
        <Indicator selectIndex={selectIndex}>
          {
            itemData?.picture_urls?.map((item, index) => {
              return (
                <div className='item' key={item}>
                  <span className={classNames('dot', {active: selectIndex === index})}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {
          itemData?.picture_urls?.map(item => {
            return (
              <div className='cover' key={item}>
                <img src={item} alt="" />
              </div> 
            )
          })
        }
      </Carousel>
    </div>
  )

  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || '#39576a'}
      itemWidth={ itemWidth }
      onClick={itemClickHandle}
      >
      <div className='inner'>
       { !itemData.picture_urls ? pictureElement : sliderElement}
        <div className='desc'>{itemData.verify_info.messages.join(' · ')}</div>
        <div className='name'>{itemData.name}</div> 
        <div className='price'>¥{itemData.price}/晚</div>
        <div className='bottom'>
          <Rating sx={{fontSize: '12px', color: '#00848A'}}
            precision ={0.1}
            name="read-only" value={itemData.star_rating ?? 5} />
            <span className='count'>{itemData?.reviews_count}</span>
            {
              itemData?.bottom_info && <span className='extra'>·{itemData?.bottom_info?.content}</span>
            }
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
}

export default RoomItem