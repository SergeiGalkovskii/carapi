import React from 'react';
import { Col, Button, Container } from 'reactstrap';
import { fetchCarVotesRequest } from '../../store/actions';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { ListCarsComponent } from '../../components';

class Score extends React.Component {

  componentWillMount() {
    this.props.getVotes();
  }

  render() {
    const {
      votes = []
    } = this.props;

    const votesComponent = (vote) => {
      return <Col xs={12} key={vote.userKey} className='p-3'>
        <h3>{vote.userKey} - {vote.isLike ? 'Yes' : 'No'}</h3>
        <img src={vote.car.imagePath} className='w-100'/>
      </Col>
    };

    return <Container>
      <Col>
        <h1 className='d-flex align-item-center mt-3'><Button onClick={() => this.props.back()} className='mr-3'>Back</Button>Score</h1>
      </Col>
      <Col>
        {votes.map(_ => votesComponent(_))}
      </Col>
    </Container>
  }
}

const mapStateToProps = state => ({
  votes: state.carVote.votes.items,
})

const mapDispatchToProps = (dispatch) => {
  return {
    back: () => dispatch(push('/')),
    getVotes: () => dispatch(fetchCarVotesRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score)