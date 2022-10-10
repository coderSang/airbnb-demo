import { useScrollPosition } from '@/hooks/useScrollPosition'
import classNames from 'classnames'
import React, { memo, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper, SearchAreaWrapper } from './style'
const AppHeader = memo(() => {
  // 定义组件内部的状态是否搜索
  const [isSearch, setIsSearch] = useState(true)
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  const { isFixed, topAlpha } = headerConfig

  // 监听滚动
  const { scrollY } = useScrollPosition()
  const prevY = useRef(0)
  //  正常滚动不断记录
  if (!isSearch) {
    prevY.current = scrollY
  }
  // 搜索状态，滚动超出30px，隐藏搜索
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)
  
  // 透明度
  const isAlpha = topAlpha && scrollY === 0
  
  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper className={classNames({fixed: isFixed})}>
        <div className='content'>
          <div className='top'>
            <HeaderLeft/>
            <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick={e=>setIsSearch(true)}/>
            <HeaderRight/>
          </div>
          <SearchAreaWrapper isSearch={isSearch}></SearchAreaWrapper>
        </div>
        { isSearch && <div className='cover' onClick={e=>setIsSearch(false)}></div>}
      </HeaderWrapper>
    </ThemeProvider>

  )
})

export default AppHeader