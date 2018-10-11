import React from 'react'
import Detail from './Detail'
import ProcessList from './ProcessList'

const Gpu = ({ gpu }) => (
  <div className='gpu'>
    <Detail
      gpu_name={gpu.product_name}
      memory={gpu.memory}
      utilization={gpu.utilization}>
    </Detail>
    <ProcessList
      processes={gpu.processes}>
    </ProcessList>
  </div>
)

export default Gpu
