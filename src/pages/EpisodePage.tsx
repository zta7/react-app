import React from 'react'
import { Virtuoso } from 'react-virtuoso'

export const EpisodePage = () => {
  console.log('EpisodePage')

  return (
    <Virtuoso
        customScrollParent={document.querySelector('.simplebar-content-wrapper')}
        totalCount={200}
        itemContent={(index) => <div>Item {index}</div>}/>
  )
}
