import {memo} from 'react';
import {Link} from 'react-router-dom';
import {useTodos} from '../hooks/useTodos';

const Header = () => {
    const {data} = useTodos({select: data => data?.length});
    return(
        <header>
          <h1>
              <span>Todos</span>
              {data && <span>({data})</span>}
          </h1>
            <Link to="/new">
                <h3>+ ADD NEW</h3>
            </Link>
        </header>
    )
}

export default memo(Header);
