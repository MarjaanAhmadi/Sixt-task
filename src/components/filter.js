import React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {selOfferForm, onOfferFormChange} from '../stores/slices/offers/offerSlice';
import {postOffer} from '../stores/slices/offers/offerThunks';
import {toast} from "react-toastify";
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import Autosearch from './autosearch';
import {Button, InputAdornment, TextField} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';

export default function Filter() {
    // The first commit of Material-UI
    const dispatch = useDispatch();
    const offerForm = useSelector(selOfferForm)
    const [selectedDate, setSelectedDate] = React.useState(new Date().setDate(new Date().getDate() + 1));
    async function submitForm(e) {
        if (offerForm.duration !== "" && offerForm.originPlaceId !== "" && offerForm.originPlaceId !== undefined) {
            dispatch(postOffer({data: offerForm}));
        } else 
            toast.warn("Pick up a location.");
        }
    
    function handleChangeHr(e) {
        const {name, value} = e.target;
        dispatch(onOfferFormChange({name, value}));
    }

    function handleChangeLocation(value) {
        const name = "originPlaceId";
        let valueItem = "";
        if (value !== null) {
            valueItem = value.placeId;
        }
        dispatch(onOfferFormChange({name, value: valueItem}));
    }

    function handleDateChange(date) {
        const selectedDateISO = new Date(date).toISOString();
        setSelectedDate(selectedDateISO);
        const name = "selectedStartDate";
        dispatch(onOfferFormChange({name, value: selectedDateISO}));
    }

    return (
        <div className="d-flex">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-between">
                    <Autosearch name="originPlaceId" handleSelectedLocation={handleChangeLocation}/>
                    <KeyboardDatePicker
                        minDate={new Date().setDate(new Date().getDate() + 1)}
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        name="selectedStartDate"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                        'aria-label': 'change date'
                    }}/>
                    <TextField
                        name="duration"
                        margin="normal"
                        width={300}
                        type="number"
                        label="Duration"
                        InputProps={{
                        endAdornment: <InputAdornment position="end">Hrs</InputAdornment>
                    }}
                        onChange={handleChangeHr}/>
                    <div className="btn-submit">
                        <Button variant="contained" color="primary" onClick={submitForm}>Submit</Button>
                    </div>
                </Grid>
            </MuiPickersUtilsProvider>
        </div>
    );
}
