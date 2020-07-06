import React, { ReactElement } from "react";

import loader from "../../assets/icons/loader.svg";

import "./loader.scss";

interface Props {
  className?: string;
}

function Loader({ className }: Props): ReactElement {
  return <img className={`loader ${className}`} src={loader} alt="" />;
}

export { Loader };
