import React, { FC, Fragment } from "react"
import { Link } from 'react-router-dom';
import { Spinner } from "../components/spinner/Spinner";

export const MainPage: FC = () => {
    return (
        <Fragment>
          <Spinner />
        </Fragment>
    )
}
export const SpinnerTestPage: FC = () => {
    return (
        <div>
            <Spinner/>
        </div>
    )
  };
  