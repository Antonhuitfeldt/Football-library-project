import {Button, Col, Container, Modal, Row} from 'react-bootstrap';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

function TeamModal({ teamData, show, onHide, onShowSquad, image }) {
  
  if (!teamData) return null;

  const team = teamData.data.team;
  const name = team.name;
  const manager = team.manager.name;
  const league = team.primaryUniqueTournament.name;
  const stadium = team.venue.name;
  const country = team.country.name;
  const position = teamData.data.pregameForm.position;
  const form = teamData.data.pregameForm.form;

  return (
    <Modal show={show} onHide={onHide} aria-labelledby="team-modal-title" centered>
      <Modal.Header closeButton>
        <Modal.Title id="team-modal-title">
          {image ? <img src={image} alt={name} width={40} className="me-2" /> : null}
          {name}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Container>
          <Row>
            <Col xs={6}>
              <p><strong>Tränare</strong></p>
              <p>{manager}</p>
            </Col>
            <Col xs={6}>
              <p><strong>Liga</strong></p>
              <p>{league}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <p><strong>Stadium</strong></p>
              <p>{stadium}</p>
            </Col>
            <Col xs={6}>
              <p><strong>Land</strong></p>
              <p>{country}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <p><strong>Placering</strong></p>
              <p>{position}</p>
            </Col>
            <Col xs={6}>
              <p><strong>Form</strong></p>
              <p>{form.join('  ')}</p>
            </Col>
          </Row>
        </Container> 
      </Modal.Body>

      <Modal.Footer>
        <FavoriteButton 
              item={team}
              keyName="favoriteTeams">
        </FavoriteButton>
        <Button variant="primary" onClick={() => onShowSquad(teamData.data.team.id)}>Visa spelare</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TeamModal;