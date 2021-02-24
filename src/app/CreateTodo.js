import TodoForm from './TodoForm';
import {useMutation, useQueryClient} from 'react-query';
import {useHistory, Link} from 'react-router-dom';
import {newTodo} from '../hooks/useTodo';

const CreateTodo  = () => {
    // const qc = useQueryClient();
    const history = useHistory();
    const create = useMutation(newTodo, {
        onSuccess: (response, syncData) => {
            // qc.setQueryData('todos', oldData => [syncData, ...oldData]);
            history.push('/');
        }
    });
    const onSubmit = vals => {
        create.mutate(vals);
    }
    return(
        <div>
            <Link to="/">Back</Link>
            <h3>Create new</h3>
            <TodoForm onSubmit={onSubmit}/>
        </div>
    )
}

export default CreateTodo;
