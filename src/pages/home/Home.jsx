import React from 'react';
import { push } from 'react-router-redux';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCarsRequest } from '../../store/actions';

class Home extends React.Component {

    componentWillMount() {
        this.props.getCars();
    }

    render() {
        return <div>
            <h1>Home</h1>
            <p>Welcome home!</p>
            <Button onClick={() => this.props.changePage()}>Go to about page via redux</Button>
        </div>
    }
}

const mapStateToProps = state => ({
    cars: state.cars
})

const mapDispatchToProps = (dispatch) => {
    return {
        changePage: () => push('/scores'),
        getCars: () => dispatch(fetchCarsRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)