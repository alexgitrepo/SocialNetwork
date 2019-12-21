import React from 'react';
import User from "./User/User";


const Users = (props) => { debugger
    let myUsersDataElements = props.usersPage.users.map(item =>
        <User name={item.fullName}
              country={item.location.country}
              userId={item.id}
              city={item.location.city} isFollowed={item.followed} img={item.ava}
              followCallback={props.followCallback} unfollofCallback={props.unfollofCallback}
    />)
let users=[{
    id: 1, ava: "", fullName: 'Alex', followed: true, satus: 'I amm THE KING OF REACT', location: {
        country: "Russia", city: "Perm"
    }
},
    {
        id: 2, ava: "", fullName: 'Dimych', followed: true, satus: 'It GURU', location: {
            country: "Belarus", city: "Minsk"
        }
    },
    {
        id: 3, ava: "", fullName: 'Artem', followed: false, satus: 'It Valenok', location: {
            country: "Belarus", city: "Minsk"
        }
    }
]
    if (props.usersPage.users.length === 0){props.setUsersCallback(users)}

    return (

        <div>
            {myUsersDataElements}
        </div>
    );
}

export default Users;
