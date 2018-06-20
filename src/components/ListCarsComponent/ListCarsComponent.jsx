import React from 'react';
import { Row, Col } from 'reactstrap';
export class ListCarsComponent extends React.Component {
    render() {
        const {
            cars = []
        } = this.props;

        const photoComponent = (car) => {
            return (
                <Col id={car.id} xs={12} lg={4} xl={6} className='d-flex flex-column car-cortainer p-3'>                   
                    <a href={car.imagePath} target='_blank' className='h-100'>
                    <div style={{ backgroundImage: `url(${car.imagePath})`, height: '100%' }} className="list_img" />
                    </a>
                </Col>
            );
        }
        return <Row className="d-flex flex-wrap">
            {cars.map(_ => photoComponent(_))}
        </Row>
    }
}