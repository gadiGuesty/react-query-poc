import {memo} from 'react';
import {useTodos} from '../hooks/useTodos';

const Header = () => {
    const {data} = useTodos({select: data => data?.length});
    return(
        <header>
          <h1>
              <span>Todos</span>
              {data && <span>({data})</span>}
          </h1>
        </header>
    )
}

export default memo(Header);
