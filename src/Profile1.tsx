/*
import React, { useState } from 'react';
import { UserProfile } from './profileTypes';
import './Profile.css';

interface ProfileProps {
  user: UserProfile;
  onUserDataChange?: (newUserData: UserProfile) => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onUserDataChange }) => {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(user.editableName || '');
  const [newBio, setNewBio] = useState(user.editableBio || '');
  const [newAvatar, setNewAvatar] = useState(user.editableAvatar || '');
  const [newAge, setNewAge] = useState(user.age || 0);
  const [newcarrera, setNewcarrera] = useState(user.carrera || '');

  const handleUserDataChange = () => {
    setEditing(false);
    if (onUserDataChange) {
      onUserDataChange({
        ...user,
        name: newName,
        bio: newBio,
        avatar: newAvatar,
        age: newAge,
        carrera: newcarrera,
        editableName: newName,
        editableBio: newBio,
        editableAvatar: newAvatar,
      });
    }
  };

  return (
    <div className="profile">
      <img
        src={newAvatar || user.avatar}
        alt="User Avatar"
        onClick={() => editing || setEditing(true)}
      />
      {editing ? (
        <>
          <input
            type="text"
            placeholder="Nuevo Nombre"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <textarea
            placeholder="Nueva Descripción"
            value={newBio}
            onChange={(e) => setNewBio(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nueva URL de Avatar"
            value={newAvatar}
            onChange={(e) => setNewAvatar(e.target.value)}
          />
          <input
            type="number"
            placeholder="Edad"
            value={newAge}
            onChange={(e) => setNewAge(parseInt(e.target.value, 10))}
          />
          <input
            type="text"
            placeholder="Carrera"
            value={newcarrera}
            onChange={(e) => setNewcarrera(e.target.value)}
          />
          <button onClick={handleUserDataChange}>Guardar</button>
        </>
      ) : (
        <>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <p>Edad: {user.age}</p>
          <p>Carrera: {user.carrera}</p>
          <button onClick={() => setEditing(true)}>Editar Perfil</button>
        </>
      )}
    </div>
  );
};

export default Profile;
*/