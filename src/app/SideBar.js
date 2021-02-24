import {useQuery, useQueryClient} from 'react-query';

const SideBar = () => {
    const qc = useQueryClient();
    const {refetch: filterTitle} = useQuery('todos', () => fetch('http://localhost:8080/posts?title=react').then(r => r.json()), {enabled: false, refetchOnWindowFocus:false});
    const {refetch: filterAuthor} = useQuery(['todos'], () => fetch('http://localhost:8080/posts?author=gal').then(r => r.json()), {enabled: false, refetchOnWindowFocus:false})
    return(
        <div style={{padding:10}}>
            <h2>Filter</h2>
            <div>
                <button onClick={() => qc.setQueryData('todos', old => old.slice(0,3))}>show 3 only</button>
            </div>
            <hr/>
            <h3>Tags</h3>
            <div>
                <button onClick={() => filterTitle()}>react</button>
            </div>
            <div>
                <button onClick={() => filterAuthor()}>gal</button>
            </div>
        </div>
    )
}

export default SideBar
