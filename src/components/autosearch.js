import React, { useCallback, useState } from "react";
import _ from "lodash";
import LocationOn from "@material-ui/icons/LocationOn";
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { getLocationQueries } from "stores/slices/locations/locationThunks";

import {
  selLocations,
  selStaticLocations,
  setLocations,
} from "stores/slices/locations/locationSlice";
const DEBOUNCE_DELAY = 1000;

//React hook for loadash debounce prevent creation of new function in each render
function useDebounce(callback, delay, opt) {
  const debouncedFn = useCallback(_.debounce(callback, delay, (opt = {})), [
    delay,
  ]);
  return debouncedFn;
}

export default function Autosearch(props) {
  const { handleSelectedLocation } = props;
  const dispatch = useDispatch();
  //use debounce hook
  const debouncedSearch = useDebounce(onSearch, DEBOUNCE_DELAY);
  const locations = useSelector(selLocations);
  const staticLocations = useSelector(selStaticLocations);
  const [showList, setShowList] = useState(false);
  //state to define input value
  const [inputSearch, setInputSearch] = useState("");
  const [selectedDropDown, setSelectedDropDown] = useState("");
  const [showStatics, setShowStatics] = useState(false);

  const showDrawerConditions = showList && locations.length > 0;
  async function onSearch(value) {
    dispatch(
      getLocationQueries(
        {
          params: value,
        },
        false
      )
    );
    setShowList(true);
  }

  //handle input change
  function handleChangeInput(e) {
    const { value } = e.target;
    if (value === "") {
      handleSelectedLocation(null);
      dispatch(setLocations([]));
    }
    setInputSearch(value);
    //limit size of input
    if (value.length < 2) return "";
    return debouncedSearch(value);
  }

  function handleSelect(item) {
    setShowList(false);
    setInputSearch(item.label);
    handleSelectedLocation(item);
  }

  function handleDropDownSelect(event) {
    setSelectedDropDown(event.target.value);
    handleSelectedLocation({ placeId: event.target.value });
  }

  function handleStatics() {
    setShowStatics(!showStatics);
    setSelectedDropDown("");
    setInputSearch("");
    handleSelectedLocation("");
  }

  return (
    <div className="pickup">
      {showStatics ? (
        <div>
          <TextField
            className="pickup-location"
            name="originPlaceId"
            margin="normal"
            value={inputSearch}
            onChange={handleChangeInput}
            type="text"
            label="Search a Pick-up location"
            InputProps={{}}
          />{" "}
          {showDrawerConditions && (
            <List className="list" component="nav">
              {locations.map((item, idx) => {
                return <LocationBox item={item} onSelect={handleSelect} />;
              })}
            </List>
          )}
        </div>
      ) : (
        <FormControl margin="normal">
          <InputLabel>Pickup Static Locations</InputLabel>
          <Select
            className="pickup-location"
            onChange={handleDropDownSelect}
            value={selectedDropDown}
          >
            {staticLocations.map((item, idx) => {
              return (
                <MenuItem key={item.label} value={item.placeId}>
                  {item.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}
      <div className="toggle">
        <FormControl>
          <FormControlLabel
            label="Search Locations"
            control={
              <Switch
                checked={showStatics}
                onChange={handleStatics}
                color="primary"
                name="checkbox"
              />
            }
          />
        </FormControl>
      </div>
    </div>
  );
}

function LocationBox(props) {
  const { item, onSelect } = props;

  function handleSelct() {
    onSelect(item);
  }
  return (
    <ListItem
      className="list-item"
      key={`${item.label}_${item.id}`}
      button
      onClick={handleSelct}
    >
      <ListItemIcon>
        <LocationOn />
      </ListItemIcon>
      <ListItemText primary={item.label} />
    </ListItem>
  );
}
