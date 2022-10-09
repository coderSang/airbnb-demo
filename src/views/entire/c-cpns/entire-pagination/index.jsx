import React, { memo } from 'react'
import { PaginationWrapper } from './style'
import Pagination from '@mui/material/Pagination';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators';

const EntirePagination = memo(() => {
  const { totalCount, currentPage, roomList} = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }), shallowEqual)
  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  // 事件处理
  const dispatch = useDispatch()
  const pageChangeHandle = (event, pageCount) => {
    window.scrollTo(0, 0)
    // 更新页码redux => currentPage
    // dispatch(changeCurrentPageAction(pageCount - 1))
    dispatch(fetchRoomListAction(pageCount - 1))
  };
  return (
    <PaginationWrapper>
      { !!roomList.length && <div className='info'>
          <Pagination count={totalPage} onChange={pageChangeHandle}/>
          <div className='desc'>
            第 { startCount } - { endCount } 个房源，共超过 { totalCount } 个
          </div>
        </div>
      }
      
    </PaginationWrapper>
  )
})

export default EntirePagination