import React from 'react';
import CommentList from "./CommentList";

function App() {
  const comments = [
    { id: 1, author: 'Jose', content: 'Muito bom!' },
    { id: 2, author: 'Maria', content: 'Concordo!' },
    { id: 3, author: 'Ana', content: 'Excelente explicação!' },
  ];

  return (
    <>
      <CommentList comments={comments} />
    </>
  )
}

export default App;

