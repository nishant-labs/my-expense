import { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import { HexColorPicker } from 'react-colorful';

interface ColorChooserProps {
	onChange: (color: string) => void;
	color: string;
}

export const ColorChooser: FC<ColorChooserProps> = ({ onChange, color }) => {
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState<HTMLElement | null>(null);
	const ref = useRef(null);

	const handleChooseOverlay = (event: MouseEvent<HTMLButtonElement>) => {
		setTarget(event.currentTarget);
		setShow(!show);
	};

	const handleChoose = () => {
		setShow(false);
	};

	useEffect(() => {
		if (!color) {
			setShow(false);
		}
	}, [color]);

	return (
		<>
			<div ref={ref}>
				<InputGroup>
					<InputGroup.Text style={{ backgroundColor: color }}></InputGroup.Text>
					<Button onClick={handleChooseOverlay}>Choose Color</Button>
				</InputGroup>

				<Overlay
					show={show}
					target={target}
					placement="bottom"
					container={ref}
					containerPadding={20}
				>
					<Popover>
						<Popover.Header as="h3">Color Chooser</Popover.Header>
						<Popover.Body>
							<HexColorPicker color={color} onChange={onChange} />
							<Button className="mt-2" onClick={handleChoose}>
								Choose
							</Button>
						</Popover.Body>
					</Popover>
				</Overlay>
			</div>
		</>
	);
};
