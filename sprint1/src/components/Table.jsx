import React from 'react'
import Tbody from './Tbody';
import styles from "./Table.module.css";

const Table = ({data}) => {
  return (
      <div className={styles.table}>
          <table>
              <thead>
                  <tr>
                      <td>Name</td>
                      <td>Age</td>
                      <td>Address</td>
                      <td>Department</td>
                      <td>salary</td>
                      <td>Married</td>
                  </tr>
              </thead>
              <tbody>
                  {data.map(elem => {
                      return <Tbody key={elem.id} value={elem}/>
                  })}
                 
              </tbody>
          </table>
    </div>
  )
}

export default Table