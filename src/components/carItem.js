import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Button, Grid} from '@material-ui/core';

export default function CarItem(props) {
    const {item} = props;
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className="card">
                <CardHeader
                    avatar={< Avatar className = "avatar" src = {
                    item.vehicleType.logo.web
                } />}
                action={<IconButton> <MoreVertIcon/> </IconButton>}
                title={item.vehicleType.title}/>
                <CardMedia
                    alt={item.vehicleType.title}
                    className="media"
                    image={item.vehicleType.images.web}
                    title={item.vehicleType.title}/>
                <CardContent className="content">
                    <Typography variant="body2" component="p">
                        Category: {item.vehicleType.category}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Final Amount Gross: {item.finalAmountGross}
                        {item.currency}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Final Amount Net: {item.finalAmountNet}
                        {item.currency}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        vat: {item.vat}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Button fullWidth variant="contained" color="primary">Book Now</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}