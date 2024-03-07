import "./LogIn.css";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  
  const [isRegistering, setIsRegistering] = useState(false);

  const handleAction = () => {
    if (isRegistering) {
      if (email.endsWith('@ucreativa.com')) {
        setMessage('Registro exitoso. Ahora puedes iniciar sesión.');
        setIsRegistering(false);
      } else {
        setMessage('Acceso denegado. El correo debe ser de @ucreativa.com');
      }
    } else {
      if (email.endsWith('@ucreativa.com')) {
        setMessage('Inicio de sesión exitoso');
      } else {
        setMessage('Acceso denegado. El correo debe ser de @ucreativa.com');
      }
    }

    setShowModal(true);
  };

  // Función para cerrar el modal y limpiar el mensaje
  const handleCloseModal = () => {
    setShowModal(false);
    setMessage('');

    if (isRegistering) {
      setIsRegistering(false);
    }
  };

  // Función para cambiar entre registro e inicio de sesión
  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <>
      <section className="vh-100 bodybg">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong border containerForm bg-black text-light">
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    className="form-control form-control-lg bg-black text-light"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="form-label text-light mb-3 mt-2">Correo electrónico</label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="form-control form-control-lg bg-black text-light"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="form-label text-light mb-3 mt-2">Contraseña</label>
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block text-light"
                  type="button"
                  onClick={handleAction}
                >
                  {isRegistering ? 'Registrarse' : 'Iniciar Sesión'}
                </button>
                <Modal show={showModal} onHide={handleCloseModal} className="text-black">
                  <Modal.Header closeButton>
                    <Modal.Title>{isRegistering ? 'Resultado del Registro' : 'Resultado del Inicio de Sesión'}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="text-dark">
                    <p>{message}</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>
                {!isRegistering && (
                  <div className="text-center mt-4 mb-4 text-light">
                    <p>
                      ¿No eres miembro?{' '}
                      <button className="btn btn-primary btn-lg btn-block text-light mt-2" onClick={toggleRegister}>
                        Regístrate
                      </button>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
