import React, { useRef } from 'react';
import { noop } from '../../lib';
import { STOP_PROP_TYPES } from '../propTypes';
import useStopDragging from './hooks/useStopDragging';
import './index.css';

const ColorStop = ({ stop, limits, onPosChange, onDeleteColor, onDragStart = noop, onDragEnd = noop}) => {
	const colorStopRef = useRef();
	const [drag] = useStopDragging({
		stop,
		limits,
		onPosChange,
		onDragStart,
		onDragEnd,
		onDeleteColor,
		colorStopRef
	});

	const { offset, color, isActive } = stop;

	return (
		<div className={isActive ? 'cs active' : 'cs'}
			ref={colorStopRef}
			style={{ left: offset }}>
			<div className="arrow"></div>
			<div className="content" style={{ backgroundColor: color }}
				onMouseDown={drag}
				onTouchStart={drag}/>
			<div className="delete" onClick={() => {
				onDeleteColor(stop.id);
			}}> x </div>
		</div>
	);
};

ColorStop.propTypes = STOP_PROP_TYPES;

export default ColorStop;
