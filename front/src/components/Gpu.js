import React from 'react'
import Detail from './Detail'
import ProcessList from './ProcessList'

const Gpu = ({ gpu }) => (
  <div className='gpu'>
    <Detail
      gpu_name={gpu.product_name}
      memory_usage={gpu.memory_usage}
      utilization={gpu.utilization}>
    </Detail>
    <ProcessList
      processes={gpu.processes}>
    </ProcessList>
  </div>
)

export default Gpu
