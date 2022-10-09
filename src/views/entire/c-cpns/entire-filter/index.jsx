import React, { memo } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/asset/data/filter_data.json'
import { useState } from 'react'
import classNames from 'classnames'

const EntireFilter = memo(() => {

  const [selectItems, setSelectItems] = useState([])
  function itemClickHandle(item) {
    const newItems = [...selectItems]
    if(newItems.includes(item)) { // 移除
      const itemIndex = newItems.findIndex(filterItem => filterItem === item)
      newItems.splice(itemIndex, 1)
    } else { // 添加
      newItems.push(item)
    }
    setSelectItems(newItems)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {
          filterData.map((item, index) => {
            return (
            <div className={classNames('item', { active: selectItems.includes(item) })} key={item}
              onClick={e => itemClickHandle(item)}>{item}</div>
            )
          })
        }
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter