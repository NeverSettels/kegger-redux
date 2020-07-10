import React from 'react'
import { Empty } from 'antd';

export default function NoBeer() {
  return (
    <div className="empty">
      <Empty
        image="beer.png"
        description="No Beer Yet!"
      >
      </Empty>
    </div>
  )
}
