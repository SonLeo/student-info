import React from 'react'

const StudentList = ({ students }) => {
  const header  = Object.keys(students[0]);
  return (
    <table>
      <tbody>
        <tr>
          {header.map((key, index) => <th key = {index}>{key.toUpperCase()}</th>)}
        </tr>
        {students.map((student) => {
          const {id, name, age, address} = student
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{address}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default StudentList