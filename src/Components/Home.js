import React from 'react'

export default function Home({users}) {

   return (
    <div>
      <table className="table container-fluid">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {
            users ? users.map((user, index) => (
              <tr key={index}>
                <td >{index}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
              </tr>
            )) : 'Loading . . .'
          }

        </tbody>
      </table>
    </div>
  )
}
