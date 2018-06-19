import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchCarsRequest, initUser } from '../../store/actions';


class Layout extends React.Component {

    componentWillMount() {
        this.props.getCars();
        this.props.initializeUser(parseInt(+new Date() / 1000));
    }

    render() {
        const {
            children,
            cars = [] } = this.props;
        console.log('car', cars);
        const photoComponent = (car) => {
            return (
                <Col id={car.id} xs={12} lg={3} xl={4}>
                    <img src={car.imagePath} height="120" width="120" />
                </Col>
            );
        }
        return (
            <Container>
                <Row>
                    <Col sm={12}>
                        {children}
                    </Col>
                    <Row className="d-flex flex-wrap">
                        {cars.map(_ => photoComponent(_))}
                    </Row>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    cars: state.cars.allCars.items
})

const mapDispatchToProps = (dispatch) => {
    return {
        getCars: () => dispatch(fetchCarsRequest()),
        initializeUser: (id) => dispatch(initUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)