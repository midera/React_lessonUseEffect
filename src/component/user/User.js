import {Link} from 'react-router-dom';

export default function User(props) {

    let {item, url} = props;

    return (
        <div>

            {item.id}-{item.first_name} {item.last_name}
            <Link to={{pathname: `${url}/${item.id}`, state: item,search:'?page=2'}}> -> user details</Link>

        </div>
    );
}