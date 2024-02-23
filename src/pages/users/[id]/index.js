import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const UserDetail = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;

    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    if (id) {
      fetchUser();
    }

  }, [router.query]);

  return (
    <div>
      {user ? (
        <div>
          <h1>User Details</h1>
          <p>
            Name: {user.name}
          </p>
          <p>
            Username: {user.username}
          </p>
          <p>
            Email: {user.email}
          </p>
          <p>
            Phone: {user.phone}
          </p>
          <p>
            Website: {user.website}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDetail;
