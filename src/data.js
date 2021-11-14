import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconStyles = {
  height: 30,
  width: 30,
  backgroundColor: "#01b6f5",
  borderRadius: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
};

export const data = [
  {
    label: "Paris",
    description: "This is an awesome city",
    icon: (
      <span style={IconStyles}>
        {" "}
        <FontAwesomeIcon icon={faBuilding} />{" "}
      </span>
    ),
  },
  {
    label: "New York",
    description: "This is an awesome city",
    icon: (
      <span style={IconStyles}>
        {" "}
        <FontAwesomeIcon icon={faBuilding} />{" "}
      </span>
    ),
  },
];
