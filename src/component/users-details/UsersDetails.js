
import {useEffect, useState} from 'react';

export default function UsersDetails(props) {
    let {match: {params: {id}}, location: {state}} = props;
    console.log(props);

    let [user, setUser] = useState(null);
    useEffect(() => {
        setUser(state);
    }, [id]);

    return (
        <div>
            {user && <h2>{user.id}- {user.name}- {user.email}</h2>}
        </div>
    );
}