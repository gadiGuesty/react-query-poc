import {Link} from 'react-router-dom';
import {useTodos} from '../hooks/useTodos';

const Todos = () => {
    const {data, isLoading, isError} = useTodos({select: d =>  d.slice(0,20), refetchOnWindowFocus:false});
    return isLoading ? <div>Loading</div> : isError ? <div>Error</div> : <ul>{data.map(({title, id}) => <li><Link to={`/${id}`}>{title}</Link></li>)}</ul>
}

export default Todos
