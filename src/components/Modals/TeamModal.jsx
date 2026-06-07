import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

/*
- Shows detailed information about a selected team
- Triggered when clicking a team card or favorite team
- Uses React-Bootstrap for modal layout and responsive grid
*/
const TeamModal = ({ teamData, show, onHide, onShowSquad, image }) => {
  
  // Avoid rendering before data is available
  if (!teamData) return null;

  //Extract relevant fields for cleaner JSX
  const team = teamData.data.team;
  const name = team.name;
  const manager = team.manager.name;
  const league = team.primaryUniqueTournament.name;
  const stadium = team.venue.name;
  const country = team.country.name;
  const position = teamData.data.pregameForm.position;
  const form = teamData.data.pregameForm.form;

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="team-modal-title"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="team-modal-title">
          {/* Team logo if available */}
          {image ? (
            <img src={image} alt={name} width={40} className="me-2" />
          ) : null}
          {name}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Container>

          {/* Manager + league */}
          <Row>
            <Col xs={6}>
              <p><strong>Coach</strong></p>
              <p>{manager}</p>
            </Col>
            <Col xs={6}>
              <p><strong>League</strong></p>
              <p>{league}</p>
            </Col>
          </Row>

          {/* Stadium + country */}
          <Row>
            <Col xs={6}>
              <p><strong>Stadium</strong></p>
              <p>{stadium}</p>
            </Col>
            <Col xs={6}>
              <p><strong>Country</strong></p>
              <p>{country}</p>
            </Col>
          </Row>

          {/* Table position + recent form */}
          <Row>
            <Col xs={6}>
              <p><strong>Standings</strong></p>
              <p>{position}</p>
            </Col>
            <Col xs={6}>
              <p><strong>Form</strong></p>
              <p>{form.join("  ")}</p>
            </Col>
          </Row>

        </Container>
      </Modal.Body>

      <Modal.Footer>
        {/* Add/remove team from favorites */}
        <FavoriteButton item={team} keyName="favoriteTeams" />

        {/* Show squad button triggers parent callback */}
        <Button
          variant="primary"
          onClick={() => onShowSquad(teamData.data.team.id)}
        >
          Show Players
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TeamModal;
