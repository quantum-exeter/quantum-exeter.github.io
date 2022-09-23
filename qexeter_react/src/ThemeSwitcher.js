import { useState } from "react";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(null);

  const resetTheme = () => {
    setTheme(null);
  };

  return (
    <div className="mb-0">
      <Dropdown as={ButtonGroup} size="sm">
        <Button
          className="text-capitalize"
          variant={theme ? theme : "secondary"}
        >
          {theme ? theme : "Default"}
        </Button>
        <Dropdown.Toggle
          split
          variant={theme ? theme : "secondary"}
          id="dropdown-split-basic"
        />
        <Dropdown.Menu>
          <Dropdown.Item eventKey="1" onClick={() => setTheme("primary")}>
            Light
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" onClick={() => setTheme("danger")}>
            Dark
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ThemeSwitcher;
