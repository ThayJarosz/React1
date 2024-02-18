import React, { useState, useEffect } from 'react';
import { getUsers, updateUser } from '../services/userService';
import NavBar from '../components/NavBar';

function Profile() {
  // Estado para armazenar os dados do usuário atual
  const [userData, setUserData] = useState(null);
  // Estado para controlar os dados do formulário de edição
  const [editFormData, setEditFormData] = useState(null);
  // Estado para controlar se o formulário de edição está visível
  const [isEditing, setIsEditing] = useState(false);

  // Função para carregar os dados do usuário atual ao montar o componente
  useEffect(() => {
    // Recupera os dados do usuário logado do local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    setUserData(currentUser);
    // Inicializa os dados do formulário de edição com os dados do usuário atual
    setEditFormData({
      fullName: currentUser.fullName,
      email: currentUser.email,
      birthDate: currentUser.birthDate,
      state: currentUser.state,
      country: currentUser.country
    });
  }, []);

  // Função para lidar com as alterações nos campos do formulário de edição
  const handleEditFormChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value
    });
  };

  // Função para lidar com o envio do formulário de edição
  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    // Atualiza os dados do usuário no userService
    updateUser(userData.id, editFormData);
    // Atualiza os dados do usuário no local storage
    localStorage.setItem('currentUser', JSON.stringify(editFormData));
    // Atualiza o estado userData com os novos dados
    setUserData(editFormData);
    setIsEditing(false); // Esconde o formulário de edição após salvar
    alert('Perfil atualizado com sucesso!');
  };

  return (
    <div>
      
      <NavBar />
      <h2>Profile</h2>
      {userData && (
        <div>
          <p><strong>Nome completo:</strong> {userData.fullName}</p>
          <p><strong>E-mail:</strong> {userData.email}</p>
          <p><strong>Data de nascimento:</strong> {userData.birthDate}</p>
          <p><strong>Estado:</strong> {userData.state}</p>
          <p><strong>País:</strong> {userData.country}</p>
          {/* Botão para mostrar o formulário de edição */}
          <button onClick={() => setIsEditing(true)}>Editar Perfil</button>
        </div>
      )}

      {/* Formulário para edição dos dados do perfil (renderizado condicionalmente) */}
      {isEditing && (
        <div>
          <h3>Edit Profile</h3>
          <form onSubmit={handleEditFormSubmit}>
            <label>
              Nome completo:
              <input type="text" name="fullName" value={editFormData.fullName} onChange={handleEditFormChange} required />
            </label>
            <label>
              E-mail:
              <input type="email" name="email" value={editFormData.email} onChange={handleEditFormChange} required />
            </label>
            <label>
              Data de nascimento:
              <input type="date" name="birthDate" value={editFormData.birthDate} onChange={handleEditFormChange} required />
            </label>
            <label>
              Estado:
              <input type="text" name="state" value={editFormData.state} onChange={handleEditFormChange} />
            </label>
            <label>
              País:
              <input type="text" name="country" value={editFormData.country} onChange={handleEditFormChange} />
            </label>
            <button type="submit">Salvar Alterações</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Profile;
