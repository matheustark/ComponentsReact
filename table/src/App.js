import React from 'react';

import Table from './Table';

function App() {

  const data = [
    {id: 1, name: 'Matheus', last: 'Monteiro'},
    {id: 2, name: 'Bill', last: 'Gates '},
    {id: 3, name: 'Elon', last: 'Musk'},
  ]

  const head = {
    id: 'Ident.',
    name: 'Nome',
    last: 'Sobrenome'
  }

  return (
    <div>
      <Table data={data} head={head} />
    </div>
  );
}

export default App;
