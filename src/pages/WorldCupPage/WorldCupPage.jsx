import { useState, useEffect } from 'react';
import { getWorldCupInfo, getWorldCupGroups } from '../../api/sportsApiPro';
import { Container, Card, ListGroup, Row, Col } from 'react-bootstrap';

/* WorldCupPage
- Fetches and displays basic World Cup tournament info
- Loads group standings and renders them in a grid
- Simple read‑only page with no user interaction
*/
const WorldCupPage = () => {
  const [info, setInfo] = useState(null);     // Tournament metadata
  const [groups, setGroups] = useState([]);   // Group standings

  /* Load tournament info + groups on mount
  - Two independent API calls
  */
  useEffect(() => {
    getWorldCupInfo().then(data =>
      setInfo(data.data.uniqueTournament)
    );

    getWorldCupGroups().then(data =>
      setGroups(data.data.standings)
    );
  }, []);

  return (
    <Container className="py-4" style={{ color: 'white' }}>
      
      {/* Tournament name + title holder */}
      <h1>{info ? info.name : "Laddar..."}</h1>
      <p>{info ? `Title defender: ${info.titleHolder.name}` : ""}</p>

      {/* Group overview */}
      <h2>Groups</h2>

      {/* Responsive grid of groups */}
      <Row xs={1} md={3} className="g-4">
        {groups.map(group => (
          <Col key={group.id}>
            <Card>
              <Card.Header>{group.name}</Card.Header>

              {/* Teams inside each group */}
              <ListGroup variant="flush">
                {group.rows.map(row => (
                  <ListGroup.Item key={row.team.id}>
                    {row.team.name}
                  </ListGroup.Item>
                ))}
              </ListGroup>

            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WorldCupPage;