// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// DO NOT MODIFY THIS FILE; IT WAS GENERATED BY buildIconComponents.mjs.
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import iconStyles from "../Icon.styles";

function IconHome(props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill={props.fill}
      className="gds-icon"
      css={iconStyles}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.654 3.87a2 2 0 0 1 2.69 0l10.001 9.092a2 2 0 0 1 .655 1.48V27a1 1 0 1 1-2 0V14.442L16 5.35 6 14.442V27a1 1 0 1 1-2 0V14.442a2 2 0 0 1 .655-1.48l9.999-9.091z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 27a1 1 0 0 1 1-1h28a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 18.999a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-7h-4v7a1 1 0 1 1-2 0v-8z"
      />
    </svg>
  );
}
export default IconHome;

IconHome.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

IconHome.defaultProps = {
  fill: "currentColor",
  width: "1em",
  height: "1em",
};
