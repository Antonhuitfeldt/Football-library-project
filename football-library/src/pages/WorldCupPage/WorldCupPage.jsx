import { useState, useEffect } from 'react';
import { getWorldCupInfo, getWorldCupGroups } from '../../api/sportsApiPro';
import { Container, Card, ListGroup, Row, Col } from 'react-bootstrap';

const WorldCupPage = () => {
  const [info, setInfo] = useState(null);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    getWorldCupInfo().then(data => setInfo(data.data.uniqueTournament));
    getWorldCupGroups().then(data => setGroups(data.data.standings));
  }, []);

  return (
    <Container className="py-4" style={{ color: 'white' }}>
      <h1 >{info ? info.name : "Laddar..."}</h1>
      <p>{info ? `Title defender: ${info.titleHolder.name}` : ""}</p>
  
      <h2>Groups</h2>
      <Row xs={1} md={3} className="g-4">
        {groups.map((group) => (
          <Col key={group.id}>
            <Card>
              <Card.Header>{group.name}</Card.Header>
              <ListGroup variant="flush">
                {group.rows.map((row) => (
                  <ListGroup.Item key={row.team.id}>{row.team.name}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default WorldCupPage;