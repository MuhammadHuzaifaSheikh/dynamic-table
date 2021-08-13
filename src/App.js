import { useState, useEffect } from 'react';
import { Table, Container, Accordion } from 'react-bootstrap';
import data from './data';
import Row from './Row';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    let status = 'all'; // processed ,Executing,Failed,all
    let newData = [];

    if (status === 'all') {
      setMyData(data);
    } else {
      data.forEach((item) => {
        const filterStatus = item.filter((curElm) => curElm.status === status);
        newData.push(filterStatus);
      });
      setMyData(newData);
    }
  }, []);

  return (
    <div className="main">
      <Container>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Run Id</th>
              <th>Run Name</th>
              <th>Job Id</th>
              <th>Status</th>
              <th>Create Date</th>
            </tr>
          </thead>
          <tbody>
            {myData.map((item, index) => {
              return (
                <>
                  <Row item={item} />
                </>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
