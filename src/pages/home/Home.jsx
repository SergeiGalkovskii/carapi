import React from 'react';
import { push } from 'react-router-redux';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Home = props => (
    <div>
        <h1>Home</h1>
        <p>Welcome home!</p>
        <Button onClick={() => props.changePage()}>Go to about page via redux</Button>
    </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/scores')
}, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(Home)