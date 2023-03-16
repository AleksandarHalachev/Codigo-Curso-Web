import React from 'react';

const ElementoListado = ({ id, tarea }) => {
	return (
		<div>
			<ul>
				<li key={id}>{tarea.proyecto}</li>
				<li key={id}>{tarea.fechalimite}</li>
				<li key={id}>{tarea.coder}</li>
			</ul>
		</div>
	);
};

export default ElementoListado;
