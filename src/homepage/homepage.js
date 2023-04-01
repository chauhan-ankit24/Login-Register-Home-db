import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function HeaderAndFooterExample() {
    const navigate = useNavigate();
    return (
        <Card className="text-center">
            <Card.Header>Welcome to Our HomePage</Card.Header>
            <Card.Body>
                <Card.Title>This is Your DashBoard</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary" onClick={() => navigate("/login")}>LogOut</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hare Krishna</Card.Footer>
        </Card>
    );
}

export default HeaderAndFooterExample;