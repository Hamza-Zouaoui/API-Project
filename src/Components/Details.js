import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => setUser(res.data))
            .then((res) => setLoading(false))
            .catch((err) => console.log(err));
    }, []);

  return (
    <div>
        {loading ? 
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner> 
        : <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{user.phone}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{user.address.city}</Card.Subtitle>
                <Card.Text>
                    {user.company.name}
                </Card.Text>
            </Card.Body>
        </Card>}
        
    </div>
  )
}

export default Details