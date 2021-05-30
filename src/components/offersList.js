import {AppBar, Grid, Toolbar, Typography} from '@material-ui/core';
import React from 'react';
import {useSelector} from 'react-redux';
import {selOffers} from '../stores/slices/offers/offerSlice';
import CarItem from './carItem';
import SixtImage from '../static/images/sixt.jpg';

const OffersList = () => {

    const offers = useSelector(selOffers);

    return (
        <Grid container spacing={3}>
            {offers.length > 0
                ? <React.Fragment>

                        <AppBar className="app-bar" position="static">
                            <Toolbar>
                                <Typography variant="h6">
                                    {offers.length}
                                    Offers
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        {offers.map((item, idx) => {
                            return (<CarItem item={item} key={idx}/>)
                        })
}
                    </React.Fragment>
                : <img className="empty-image" src={SixtImage}/>
}

        </Grid>
    )
}
export default OffersList;