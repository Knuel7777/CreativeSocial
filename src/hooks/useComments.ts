import React, { useRef, useState } from 'react';

export const useComments = () => {
    const [comments, setComments] = useState<{ user: string, content: string }[]>([

    ]);
    

    const [newUser, setNewUser] = useState('');
    const [newComment, setNewComment] = useState('');
  
    const inputNombreRef = useRef<HTMLInputElement>(null);
  
    const handleAddCommnet = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setComments([...comments, { user: newUser, content: newComment }]);
      setNewUser('');
      setNewComment('');
      console.log(comments)
      inputNombreRef.current?.focus();
    }

    return {
        comments,
        newUser,
        newComment,
        inputNombreRef,
        handleAddCommnet,
        setNewComment, 
        setNewUser
    }
}
