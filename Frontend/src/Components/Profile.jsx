
import { Avatar, Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";
import backendUrl from "../api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = localStorage.getItem("authorization");
      setIsLoggedIn(!!token);
    }, []);
  const handleLogout = () => {
    localStorage.removeItem("authorization");
    setIsLoggedIn(false);
    navigate("/Login");
  };
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('authorization'); // Get token from localStorage
      
      if (!token) {
        setError("No authorization token found");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://${backendUrl}/profile`, {
          headers: {
            'Authorization': token // Include token in Authorization header
          }
        });
        setUser(response.data);
      } catch (err) {
        console.log("Error fetching profile:", err); // Debug log
        if (err.response) {
          setError(err.response.data?.error || err.message);
        } else if (err.request) {
          setError("No response received");
        } else {
          setError(err.message);
        }
      }
      finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <Dropdown
      label={<Avatar alt="User settings" img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80" rounded />}
      arrowIcon={false}
      inline
    >
      <Dropdown.Header>
      <span className="block text-sm">
                 Hii,  {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
                  </span>
        <span className="block truncate text-sm font-medium">{user.email}</span>
      </Dropdown.Header>
   
      <Dropdown.Item href="">My Profile</Dropdown.Item>
      <Dropdown.Item href="/">Resume Analysis</Dropdown.Item>
      <Dropdown.Item>Change Password</Dropdown.Item>
      
      <Dropdown.Divider />
      <Dropdown.Item>
   <button onClick={handleLogout}>Sign out</button>
      </Dropdown.Item>
    </Dropdown>
  );
}