/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, ReactNode, useCallback } from 'react';
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd';
import { StrictModeDroppable } from './StrictModeDroppable';

const getListStyle = (isDraggingOver: boolean, isDropDisabled?: boolean) => ({
	background: isDropDisabled ? 'unset' : isDraggingOver ? 'lightblue' : 'lightgrey',
	display: 'grid',
	gridTemplateColumns: '1fr 1fr 1fr 1fr',
	gridTemplateRows: 'repeat(2, 250px)',
	gap: '10px 5px',
	justifyItems: 'stretch',
});

interface OrderableProps {
	children: (data: any) => ReactNode;
	items: Array<{ id: string; data: any }>;
	onDragEnd: (items: Array<{ id: string; data: any }>) => void;
	isDropDisabled?: boolean;
	isDragDisabled?: boolean;
}

export const Orderable: FC<OrderableProps> = ({ children, items, onDragEnd, isDropDisabled, isDragDisabled }) => {
	const handleDragEnd = useCallback(
		(result: DropResult) => {
			if (!result.destination) {
				return;
			}
			const updatedItems = Array.from(items);
			const [removed] = updatedItems.splice(result.source.index, 1);
			updatedItems.splice(result.destination.index, 0, removed);

			onDragEnd(updatedItems);
		},
		[items, onDragEnd],
	);

	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<StrictModeDroppable isDropDisabled={isDropDisabled} droppableId="droppable" direction="horizontal">
				{(droppableProvided, snapshot) => (
					<div
						className="p-2"
						ref={droppableProvided.innerRef}
						style={getListStyle(snapshot.isDraggingOver, isDropDisabled)}
						{...droppableProvided.droppableProps}
					>
						{items.map((item, index) => (
							<Draggable isDragDisabled={isDragDisabled} key={item.id} draggableId={item.id} index={index}>
								{(draggableProvided) => (
									<div
										ref={draggableProvided.innerRef}
										{...draggableProvided.draggableProps}
										{...draggableProvided.dragHandleProps}
									>
										{children(item.data)}
									</div>
								)}
							</Draggable>
						))}
						{droppableProvided.placeholder}
					</div>
				)}
			</StrictModeDroppable>
		</DragDropContext>
	);
};
