import {Container, Divider} from '@material-ui/core';
import React from 'react';
import Filter from '../components/filter';
import OffersList from '../components/offersList';

const Main = () => {
    return (
        <Container>
            <Filter/>
            <Divider/>
            <div className="car-list">
                <OffersList/>
            </div>
        </Container>
    )
}
export default Main;