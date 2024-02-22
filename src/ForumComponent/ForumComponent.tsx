import { useState } from 'react';
import './ForumComponent.css';

function ForumComponent() {
  const [comments, setComments] = useState<{ user: string, content: string }[]>([]);
  const [newUser, setNewUser] = useState('');
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
     {setComments([...comments, { user: newUser, content: newComment }]);
      setNewUser('');
      setNewComment('');
    }
  };

  return (
    <div className="mt-4">
      <h1>Foro Universidad Creativa</h1>
      {comments.map((comment, index) => (
        <div key={index}>
          <p><strong>Usuario:</strong> {comment.user}</p>
          <p><strong>Comentario:</strong> {comment.content}</p>
        </div>
      ))}
      <div className= "d-flex gap-3 flex-column justify-content-between">
        <input
          className="rounded border border-white w-50"
          type="text"
          placeholder="Nombre"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <textarea
          className="rounded border border-white"
          placeholder="Comentario"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea> 
        <div className="d-flex justify-content-center">
          <button onClick={addComment}>Añadir Comentario</button>
        </div>
      </div>
    </div>
  );
}

export default ForumComponent;


