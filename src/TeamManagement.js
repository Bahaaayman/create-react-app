import React, { useState } from 'react';
import './TeamManagement.css';

function TeamManagement() {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'Alice', role: 'Manager' },
    { id: 2, name: 'Bob', role: 'Developer' },
  ]);
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('');

  const addMember = (e) => {
    e.preventDefault();
    if (!newName || !newRole) return;
    const id = teamMembers.length + 1;
    setTeamMembers([...teamMembers, { id, name: newName, role: newRole }]);
    setNewName('');
    setNewRole('');
  };

  return (
    <div className="team-management">
      <h1>Team Management</h1>
      <form onSubmit={addMember} className="team-form">
        <input
          type="text"
          placeholder="Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Role"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
        />
        <button type="submit">Add Member</button>
      </form>
      <ul className="team-list">
        {teamMembers.map((member) => (
          <li key={member.id} className="team-item">
            <strong>{member.name}</strong> - {member.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamManagement;
