import React from "react";
import Card from "react-bootstrap/Card";

const Animal = ({ animal, id }) => {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          backgroundColor: "orange",
          fontWeight: 800,
          border: "5px  solid black",
        }}
        className="m-3 "
      >
        <Card.Body>
          <Card.Title>{animal.nombre}</Card.Title>
          <p>Raza : {animal.raza}</p>
          <p>ID : {animal.id}</p>
          <p>Edad: {animal.edad}</p>
          <p>Propietario : {animal.propietario}</p>
          <p>Diagnóstico: {animal.diagnostico}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Animal;
