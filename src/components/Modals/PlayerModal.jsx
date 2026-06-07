import {Modal, Container, Row, Col} from 'react-bootstrap';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

/*
- Displays detailed information about a selected player
- Triggered from search results or team squad views
- Uses React-Bootstrap for layout and modal structure
*/
const PlayerModal = ({ playerData, show, onHide }) => {
  
  // Avoid rendering the modal before data is available
  if (!playerData) return null;

  // Extract relevant player fields for cleaner JSX
  const name = playerData.name;
  const jerseyNumber = playerData.jerseyNumber;
  const position = playerData.position;
  const country = playerData.country.name;
  const height = playerData.height;
  const foot = playerData.preferredFoot;
  const team = playerData.team.name;
  const marketValue = (playerData.proposedMarketValue / 1000000).toFixed(1) + 'M €';
  const dateOfBirth = new Date(playerData.dateOfBirth).toLocaleDateString('sv-SE');
  const contractUntil = new Date(playerData.contractUntilTimestamp * 1000).toLocaleDateString('sv-SE');

  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      aria-labelledby="player-modal-title" 
      centered
    >
      
      <Modal.Header closeButton>
        <Modal.Title id="player-modal-title">
          {name}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Container>

          {/* Basic player info */}
          <Row>
            <Col xs={6}>
              <p><strong>Shirt Number</strong></p>
              <p>{jerseyNumber}</p>
            </Col>
            <Col xs={6}>
              <p><strong>Position</strong></p>
              <p>{position}</p>
            </Col>
          </Row>

          {/* Nationality + team */}
          <Row>
            <Col xs={6}>
              <p><strong>Nationality</strong></p>
              <p>{country}</p>
            </Col>
            <Col xs={6}>
              <p><strong>Team</strong></p>
              <p>{team}</p>
            </Col>
          </Row>

          {/* Physical attributes */}
          <Row>
            <Col xs={6}>
              <p><strong>Height</strong></p>
              <p>{height} cm</p>
            </Col>
            <Col xs={6}>
              <p><strong>Strong Foot</strong></p>
              <p>{foot}</p>
            </Col>
          </Row>

          {/* Birth + contract */}
          <Row>
            <Col xs={6}>
              <p><strong>Born</strong></p>
              <p>{dateOfBirth}</p>
            </Col>
            <Col xs={6}>
              <p><strong>Contract Expire</strong></p>
              <p>{contractUntil}</p>
            </Col>
          </Row>

          {/* Market value + favorite button */}
          <Row>
            <Col xs={6}>
              <p><strong>Market Value</strong></p>
              <p>{marketValue}</p>
            </Col>
            <Col xs={6}>
              <FavoriteButton 
              item={playerData}
              keyName="favoritePlayers">
              </FavoriteButton>
            </Col>
          </Row>

        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default PlayerModal;