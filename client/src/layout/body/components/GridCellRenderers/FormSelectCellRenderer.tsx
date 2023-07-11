import Dropdown from 'react-bootstrap/Dropdown';

export const FormSelectCellRenderer = () => {
	return (
		<Dropdown>
      <Dropdown.Toggle variant="success" id={`dropdown-basic-${Date.now()}`}>
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
	);
};
