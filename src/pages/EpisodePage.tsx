import React from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'

export const EpisodePage = () => {
  console.log('EpisodePage')
  const rowVirtualizer = useVirtualizer({
    count: 10000,
    getScrollElement: () => document.querySelector('.simplebar-content-wrapper'),
    estimateSize: () => 35,
    overscan: 5,
  })

  console.log(document.getElementById('PageScrollArea'))

  return (
    <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}>
      {rowVirtualizer.getVirtualItems().map((virtualRow) => (
        <div
            key={virtualRow.index}
            className={virtualRow.index % 2 ? 'ListItemOdd' : 'ListItemEven'}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}>
          Row {virtualRow.index}
        </div>
      ))}
    </div>
  )
}
