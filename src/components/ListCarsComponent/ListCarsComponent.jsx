import React from 'react';
import { Row, Col } from 'reactstrap';

export class ListCarsComponent extends React.Component {
    render() {
        const {
            cars = []
        } = this.props;

        const photoComponent = (car) => {
            return (
                <Col id={car.id} xs={12} lg={3} xl={4}>
                    <img src={car.imagePath} height="120" width="120" />
                </Col>
            );
        }
        return <Row className="d-flex flex-wrap">
            {cars.map(_ => photoComponent(_))}
        </Row>
    }
}