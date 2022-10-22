import { Segmented } from "antd";
import { useState } from "react";
import styles from "./SubNavbar.module.scss";
import { useNavigate } from "react-router-dom";

const SubNavbar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function handleSelectedLink(value) {
    setValue(value);
    navigate(`${value}`);
  }

  return (
    <div className={styles.container}>
      <Segmented
        options={[
          {
            label: <p>Posiciones</p>,
            value: "posiciones",
          },
          {
            label: <p>Calendario</p>,
            value: "calendario",
          },
          {
            label: <p>Goleadores</p>,
            value: "goleadores",
          },
        ]}
        value={value}
        onChange={handleSelectedLink}
      />
    </div>
  );
};

export default SubNavbar;
