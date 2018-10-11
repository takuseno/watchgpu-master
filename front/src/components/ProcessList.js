import React, { PropTypes } from 'react'

const Process = ({ pid, name, memory }) => (
  <tr className="process">
    <td>{pid}</td>
    <td>{name}</td>
    <td>{memory}</td>
  </tr>
)

const ProcessList = ({ processes }) => (
  <div className='processes'>
    <table className='process-table'>
      <thead>
        <tr>
          <th>pid</th>
          <th>name</th>
          <th>memory</th>
        </tr>
      </thead>
      <tbody>
        {processes.map(process =>
          <Process
            pid={process.pid}
            name={process.process_name}
            memory={process.used_memory}>
          </Process>
        )}
      </tbody>
    </table>
  </div>
)

export default ProcessList
