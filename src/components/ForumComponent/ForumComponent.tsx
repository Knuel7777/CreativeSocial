import { useComments } from "../../hooks/useComments";
import "./ForumComponent.css";

function ForumComponent() {
  const {
    comments,
    handleAddCommnet,
    inputNombreRef,
    newComment,
    newUser,
    setNewComment,
    setNewUser,
  } = useComments();

  return (
    <div className="row w-100 h-100">
      <div className="mt-4 col-md-6 ">
        <h1 className="pb-3">Foro Universidad Creativa</h1>
        <form
          onSubmit={handleAddCommnet}
          className="d-flex gap-2 flex-column justify-content-between"
        >
          <input
            ref={inputNombreRef}
            autoComplete="off"
            className="p-1 rounded border border-white w-50"
            type="text"
            placeholder="Nombre"
            name="nombre"
            required
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
          />
          <textarea
            required
            autoComplete="off"
            className="p-1 rounded border border-white"
            placeholder="Comentario"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <div className="d-flex justify-content-end">
            <button>Añadir Comentario</button>
          </div>
        </form>
      </div>
      <div className="col-md-6 h-100 overflow-auto">
        <h2 className="mt-4 text-center">Comentarios</h2>
        {comments.map((comment, index) => (
          <div key={index}>
            <p>
              <strong>Usuario:</strong> {comment.user}
            </p>
            <p>
              <strong>Comentario:</strong> {comment.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForumComponent;
