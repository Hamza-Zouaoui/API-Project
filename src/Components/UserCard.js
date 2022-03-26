import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
    <Card.Text>
      {user.email}
    </Card.Text>
  </Card.Body>
  <Link to={`/usersdetails/${user.id}`}>
    <Button>Details</Button>
    </Link>
</Card>
  )
}

export default UserCard