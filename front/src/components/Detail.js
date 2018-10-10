import React, { PropTypes } from 'react'

const Detail = ({ gpu_name, memory_usage, utilization }) => (
  <div className='detail'>
    <p>{gpu_name}</p>
    <p>total: {memory_usage.total} used: {memory_usage.used} free: {memory_usage.free}</p>
    <p>GPU Util: {utilization.gpu_util} Memory Util: {utilization.memory_util}</p>
  </div>
)

export default Detail
