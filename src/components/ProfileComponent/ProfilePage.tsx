import React from "react";
import Profile from "../../Pages/Profile";
import { UserProfile } from "./profileTypes";

const ProfilePage: React.FC = () => {
  const [currentUser, setCurrentUser] = React.useState<UserProfile>({
    name: "Nombre del Usuario",
    bio: "Descripción del Usuario",
    avatar: "URL de la imagen del avatar",
    editableName: "",
    editableBio: "",
    editableAvatar: "",
  });

  const handleUserDataChange = (newUserData: UserProfile) => {
    setCurrentUser(newUserData);
  };

  return (
    <div className="profile-page">
      <h1 className="Main">Perfil de Usuario</h1>
      <Profile user={currentUser} onUserDataChange={handleUserDataChange} />
    </div>
  );
};

export default ProfilePage;
