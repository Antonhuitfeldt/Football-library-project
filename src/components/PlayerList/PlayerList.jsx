import {Container, Row, Col} from 'react-bootstrap';
import "./PlayerList.css";

// Imported list from bootstrap
const PlayerList = ({ players, image, onPlayerClick }) => {
  if (players.length === 0) return null;

  return (
    <Container>
      <div className="player-list-header">
        <img src={image} width={40} />
        <h2>Players</h2>
      </div>
      {players.map((item) => (
        <Row key={item.player.id} className='player-row' onClick={() => onPlayerClick(item.player)}>
          <Col xs={6}>{item.player.name}</Col>
          <Col xs={6}>{item.player.position}</Col>
        </Row>
      ))}
    </Container>
  );
};

export default PlayerList;