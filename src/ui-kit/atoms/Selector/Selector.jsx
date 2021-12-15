import React from "react";
import Select, { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./Selector.scss";

library.add(faCaretDown);

const Options = [
  {
    label: "List",
    value: "list"
  },
  {
    label: "Grid",
    value: "grid"
  }
];

const styles = {
  dropdownIndicator: () => ({
    color: "#000000"
  }),
  placeholder: () => ({
    fontSize: "1em",
    color: "#333333",
    fontWeight: 400
  }),
  container: () => ({
    width: "173px"
  }),
  option: () => ({
    border: "2px solid #000000",
    height: "36px",
    marginTop: "-2px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center"
  }),
  control: () => ({
    border: "2px solid #000000",
    marginTop: "-2px",
    display: "flex",
    height: "36px",
    flexDirection: "row",
    flexWrap: "nowrap",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-evenly",
  }),
  valueContainer: () => ({
    display: "flex",
    alignContent: "flex-end",
    flexWrap: "wrap"
  }),
  menu: () => ({
    marginTop: "-4px",
    border: "none"
  }),
}

const Placeholder = props => <components.Placeholder {...props} />;

const CaretDownIcon = () => <FontAwesomeIcon icon="caret-down" />;

const DropdownIndicator = props => (
    <components.DropdownIndicator {...props}>
      <CaretDownIcon />
    </components.DropdownIndicator>
);

const indicatorSeparatorStyle = {
  backgroundColor: "none"
};

const IndicatorSeparator = ({ innerProps })=> {
  return <span style={indicatorSeparatorStyle} {...innerProps} />;
};


export const Selector = () => {
  return (
    <div className="App">
      <Select
        closeMenuOnSelect={false}
        components={{ Placeholder, DropdownIndicator, IndicatorSeparator }}
        styles={styles}
        placeholder={"Grid"}
        options={Options}
      />
    </div>
  );
}