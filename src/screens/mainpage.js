import { Backdrop, CircularProgress } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selLoaderLoading } from "../stores/loaderStore/loaderSlice";
import Main from "../components/main";

const MainPage = () => {
  const loading = useSelector(selLoaderLoading);
  return (
    <React.Fragment>
      <Main></Main>
      <Backdrop className="loading" open={loading}>
        <CircularProgress />
      </Backdrop>
    </React.Fragment>
  );
};
export default MainPage;
