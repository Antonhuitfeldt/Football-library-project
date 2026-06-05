import {Modal, Container, Row, Col} from 'react-bootstrap';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

const PlayerModal = ({ playerData, show, onHide }) => {
  if (!playerData) return null;

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
    <Modal show={show} onHide={onHide} aria-labelledby="player-modal-title" centered>
      <Modal.Header closeButton>
        <Modal.Title id="player-modal-title">
          {name}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Container>
          <Row>
            <Col xs={6}>
              <p><strong>Tröjnummer</strong></p>
              <p>{jerseyNumber}</p>
            </Col>
            <Col xs={6}>
              <p><strong>Position</strong></p>
              <p>{position}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <p><strong>Land</strong></p>
              <p>{country}</p>
            </Col>
            <Col xs={6}>
              <p><strong>Lag</strong></p>
              <p>{team}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <p><strong>Längd</strong></p>
              <p>{height} cm</p>
            </Col>
            <Col xs={6}>
              <p><strong>Fot</strong></p>
              <p>{foot}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <p><strong>Född</strong></p>
              <p>{dateOfBirth}</p>
            </Col>
            <Col xs={6}>
              <p><strong>Kontrakt till</strong></p>
              <p>{contractUntil}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <p><strong>Marknadsvärde</strong></p>
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
}

export default PlayerModal;