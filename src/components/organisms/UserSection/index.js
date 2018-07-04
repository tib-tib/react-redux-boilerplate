import React from 'react'
import UserList from '../../molecules/UserList'

const UserSection = (props) => {
  const { users } =props
  return (
    <div>
      <h2>Users</h2>
      {users.length && <div>{users.length} users found</div>}
      <UserList users={users} />
    </div>
  )
}

export default UserSection
