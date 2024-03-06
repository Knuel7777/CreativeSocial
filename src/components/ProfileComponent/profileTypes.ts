export interface UserProfile {
  name: string;
  bio: string;
  avatar: string;
  age?: number; 
  carrera?: string; 
  editableName?: string;
  editableBio?: string;
  editableAvatar?: string;
}
