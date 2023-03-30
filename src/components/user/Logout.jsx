import React from 'react';


function Logout({setUser}) {
  const handleLogout = () => {
    // Send a request to the logout route
    fetch('https://careerconnect-production.up.railway.app/logout', { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          setUser(null)
        }
      });
  };

  return (
    <div >
      <button id="logout" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
