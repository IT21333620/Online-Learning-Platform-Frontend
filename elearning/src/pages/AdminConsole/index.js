import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Button,
} from "@mui/material";

const UserCard = ({ user }) => {
  return (
    <Card sx={{ border: "1px solid #cccccc", boxShadow: "none", mb: 1 }}>
      <CardContent sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          sx={{ width: 64, height: 64, mr: 2 }}
          alt={user.name}
          src={user.profileImage}
        />
        <Box>
          <Typography variant="h6">{user.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            {user.role}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {user.email}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const CourseCard = ({ course }) => {
  return (
    <Card sx={{ border: "1px solid #cccccc", boxShadow: "none", mb: 1 }}>
      <CardContent>
        <Typography variant="subtitle1" gutterBottom>
          {course.category}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {course.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Price: {course.price}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="success" sx={{ mr: 1 }}>
            Approve
          </Button>
          <Button variant="contained" color="error">
            Reject
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const TransactionCard = ({ transaction }) => {
  return (
    <Card sx={{ border: "1px solid #cccccc", boxShadow: "none", mb: 1 }}>
      <CardContent>
        <Typography variant="subtitle1" gutterBottom>
          Transaction ID: {transaction.id}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          User ID: {transaction.userId}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Course ID: {transaction.courseId}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Amount: {transaction.amount}
        </Typography>
      </CardContent>
    </Card>
  );
};

const AdminConsole = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/payments");
      if (!response.ok) {
        throw new Error("Failed to fetch transactions");
      }
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const users = [
    {
      id: 1,
      name: "John Doe",
      role: "Admin",
      email: "john@example.com",
      profileImage:
        "https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Leaner",
      email: "jane@example.com",
      profileImage:
        "https://attractmorematches.com/wp-content/uploads/2023/10/Screenshot-2023-10-18-at-5.08.47-PM.png",
    },
    {
      id: 1,
      name: "John Doe",
      role: "Admin",
      email: "john@example.com",
      profileImage:
        "https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Instructor",
      email: "jane@example.com",
      profileImage:
        "https://attractmorematches.com/wp-content/uploads/2023/10/Screenshot-2023-10-18-at-5.08.47-PM.png",
    },
  ];

  const courses = [
    {
      id: 1,
      category: "Programming",
      name: "React Fundamentals",
      price: "$49.99",
    },
    {
      id: 2,
      category: "Design",
      name: "UI/UX Design Principles",
      price: "$39.99",
    },
    {
      id: 2,
      category: "Design",
      name: "UI/UX Design Principles",
      price: "$39.99",
    },
    {
      id: 2,
      category: "Design",
      name: "UI/UX Design Principles",
      price: "$39.99",
    },
  ];

  // const transactions = [
  //   { id: 1, userId: 1, courseId: 1, amount: "$49.99" },
  //   { id: 2, userId: 2, courseId: 2, amount: "$39.99" },
  // ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Recently Registered Users
            </Typography>
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Pending Courses
            </Typography>
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Recent Transactions
            </Typography>
            {transactions.map((transaction) => (
              <TransactionCard key={transaction.id} transaction={transaction} />
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AdminConsole;
