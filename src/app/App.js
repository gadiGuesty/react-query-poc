import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Todos from './Todos';
import Header from './Header';
import Todo from './Todo';
import SideBar from './SideBar';
import CreateTodo from './CreateTodo';

const clientCache = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={clientCache}>
          <BrowserRouter>
              <div className='layout'>
                  <Header/>
                  <div className='content'>
                      <aside>
                          <SideBar/>
                      </aside>
                      <main>
                          <Switch>
                              <Route exact path="/">
                                  <Todos/>
                              </Route>
                              <Route  path="/new">
                                  <CreateTodo/>
                              </Route>
                              <Route path="/:id">
                                  <Todo/>
                              </Route>
                          </Switch>
                      </main>
                  </div>
              </div>
          </BrowserRouter>
          <ReactQueryDevtools />
      </QueryClientProvider>
  );
}

export default App;
