import React, { ReactElement } from "react";
import closeIcon from "../../assets/icons/close.svg";

import "./drawer.scss";

interface Props {
  title: string;
  visible: boolean;
  onClose(): void;
  children: ReactElement | ReactElement[] | string;
}

function Drawer({ children, visible, title, onClose }: Props): ReactElement {
  return (
    <div className={`drawer ${visible && "drawer--is--visible"}`}>
      <header className="drawer__header">
        <button onClick={onClose}>
          <img className="drawer__closeIcon" src={closeIcon} alt="" />
        </button>
        {title}
      </header>
      <div className="drawer__content">{children}</div>
    </div>
  );
}

export { Drawer };
