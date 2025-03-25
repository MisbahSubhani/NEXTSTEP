



import { Avatar, Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";
import backendUrl from "../api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export function HrProfile() {
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
    navigate("/hr/Login");
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
        const response = await axios.get(`http://${backendUrl}/Hr/profile`, {
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
         label={
          
          <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <span class="font-medium text-gray-600 dark:text-gray-300">{user.name.charAt(0).toUpperCase()}</span>
          </div>
          
                  }

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