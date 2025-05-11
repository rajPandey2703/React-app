import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

function ClosableAlert({messageData}) {
  const [show, setShow] = useState(true);

  return (
    <div className='center' style={{
          width:'500px',
          height:'50px'
        }}>
      {show && (
        <Alert variant={messageData.varient} onClose={() => setShow(false)} dismissible>
           {messageData.msg}
        </Alert>
      )}

      {!show && (
        <Button onClick={() => setShow(true)} variant="outline-warning">
          Show Alert Again
        </Button>
      )}
    </div>
  );
}

export default ClosableAlert;
