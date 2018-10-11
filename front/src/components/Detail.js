import React, { PropTypes } from 'react'

const Detail = ({ gpu_name, memory, utilization }) => (
  <div className='detail'>
    <p>{gpu_name}</p>
    <p>total: {memory.total} used: {memory.used_memory} free: {memory.free_memory}</p>
    <p>GPU Util: {utilization.gpu_util} Memory Util: {utilization.memory_util}</p>
  </div>
)

export default Detail
