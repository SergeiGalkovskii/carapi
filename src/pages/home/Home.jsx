import React from 'react';
import { push } from 'react-router-redux';
import { Button } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchRandomCarRequest, fetchCarVoteRequest } from '../../store/actions';

class Home extends React.Component {

    componentWillMount() {
        if (!this.props.car) {
            this.props.getRandomCar();
        }
    }

    onVoting = (isLike, carId) => {
        const voteObj = {
            userKey: this.props.user,
            carId,
            isLike
        };
        this.props.vote(voteObj);
    }

    render() {
        const {
            car,
            changePage
        } = this.props;

        const randomPhoto = (car) => {
            if (!car) {
                return null;
            }
            return <img src={car.imagePath} className="w-100" />

        }
        return <Row>
            <Col xs={12} className="mb-3">
                {randomPhoto(car)}
            </Col>
            <Col xs={12} className="d-flex flex-wrap">
                <Col xs={4}>
                    <Button color="success" className="w-100" onClick={() => this.onVoting(true, car.id)}>Love it</Button>
                </Col>
                <Col xs={4}>
                    <Button color="danger" className="w-100" onClick={() => this.onVoting(false, car.id)}>Hate it</Button>
                </Col>
                <Col xs={4} onClick={() => this.props.changePage()}>
                    <Button color="primary" className="w-100" onClick={changePage}>Show score</Button>
                </Col>
            </Col>
        </Row>
    }
}

const mapStateToProps = state => ({
    car: state.cars.randomCar.item,
    user: state.user.id
})

const mapDispatchToProps = (dispatch) => {
    return {
        changePage: () => dispatch(push('/scores')),
        vote: (vote) => dispatch(fetchCarVoteRequest(vote)),
        getRandomCar: () => dispatch(fetchRandomCarRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)