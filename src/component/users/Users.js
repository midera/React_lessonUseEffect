import {useEffect, useState} from "react";
import User from "../user/User";

export default function Users(props) {
    let {match: {url}} = props;

    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2')
            .then(value => value.json())
            .then(value => {
                setUsers([...value.data]);
            });

    }, []);

    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value} url={url}/>)
            }

        </div>
    );
}