

import HOC from "./HOC";

//eslint-disable-next-line
const UsersList = ({ data }) => {

    //eslint-disable-next-line
  let renderUsers = data.map((user) => (
    <div key={user.id}>
        <p>
            <strong>{user.name}</strong>
        </p>
    </div>
))
  return (
    <div>
      { renderUsers }
    </div>
  )
}

const SearchUsers = HOC(UsersList, "users");

export default SearchUsers;
