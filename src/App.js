import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    setResult(num1 + num2);
  };

  const handleSubtraction = () => {
    setResult(num1 - num2);
  };

  const handleMultiplication = () => {
    setResult(num1 * num2);
  };

  const handleDivision = () => {
    setResult(num1 / num2);
  };

  return (
 <div style={{display: "flex", justifyContent: "center", alignItems: "center", borderSpacing: "10px" }}>
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label><b>Enter first number</b></Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter first number"
          onChange={(e) => setNum1(parseInt(e.target.value))}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label><b>Enter second number</b></Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter second number"
          onChange={(e) => setNum2(parseInt(e.target.value))}
        />
      </Form.Group> <br></br>

      <Button variant="primary" onClick={handleAddition}>
        Add
      </Button>{' '}
      <Button variant="secondary" onClick={handleSubtraction}>
        Subtract
      </Button>{' '}
      <Button variant="success" onClick={handleMultiplication}>
        Multiply
      </Button>{' '}
      <Button variant="danger" onClick={handleDivision}>
        Divide
      </Button> <br></br>
      <b>The result is: {result}</b>
    </Form>
    </div>
  );
}

export default App;
