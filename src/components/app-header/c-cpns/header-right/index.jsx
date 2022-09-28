import IconAvatar from '@/asset/svg/icon_avatar'
import IconGlobal from '@/asset/svg/icon_global'
import IconMenu from '@/asset/svg/icon_menu'
import React, { memo, useState, useEffect } from 'react'
import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  // 定义状态
  const [showPanel, setShowPanel] = useState(false)
  // 副作用代码
  useEffect(()=>{
    function windowHandleClick() {
      setShowPanel(false)
    }
    window.addEventListener('click', windowHandleClick, true)
    return ()=>{
      window.removeEventListener('click', windowHandleClick)
    }
  }, [])
  // 事件处理函数
  function profileClickHandle(e) {
  
    setShowPanel(true)
  }
  return (
    <RightWrapper>
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal/>
        </span>
      </div>
      <div className='profile' onClick={profileClickHandle}>
        <IconMenu/>
        <IconAvatar/>
        {showPanel && (
          <div className='panel'>
            <div className='top'>
              <div className='register item'>注册</div>
              <div className='login item'>登录</div>
            </div>
            <div className='bottom'>
              <div className='item'>出租房源</div>
              <div className='item'>开展体验</div>
              <div className='item'>帮助</div>
            </div>
          </div>
        )}
      
      </div>
    </RightWrapper>
  )
})

export default HeaderRight