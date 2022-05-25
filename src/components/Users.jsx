// we are going to show all users
// we are going to "listen" to input result
// we can filter users according to input result

// export const Users = (props) => {
export const Users = ({ filteredUsers }) => {
  return (
    <div>
      {filteredUsers.map((user) => (
        <div>{user.name}</div>
      ))}
    </div>
  );
};
