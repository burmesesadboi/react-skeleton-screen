import { useEffect } from "react";
import { useState } from "react";

const User = () => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      const newData = data[Math.floor(Math.random() * data.length)];

      setProfile(newData);
    }, 5000);
  }, []);

  return (
    <div className="user-container">
      <h2>User Details</h2>
      {profile && (
        <div className="profile">
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}

      {!profile && <div>Loading ...</div>}
    </div>
  );
};

export default User;
