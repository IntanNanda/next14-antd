import { useState, useEffect } from "react";
import { Table, Button } from "antd";
import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "website",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
          <Button type="link" onClick={() => router.push(`users/${record.id}`)}>View Details post</Button>
      ),
    },
  ];

  return <Table dataSource={users} columns={columns} />;
};

export default User;
