import React, { useEffect, useState } from 'react';
import history from '../../util/history';

import { firebaseApp } from '../../services/firebase';

function Home(props) {
  const [checkInLogs, setCheckInLogs] = useState([]);
  const [name, setName] = useState('');
  console.log('Log: Home -> checkInLogs', checkInLogs);

  useEffect(() => {
    firebaseApp.database().ref('checkIn').on('value', (snapshot) => {
      let snapshotValue = snapshot.val();
      let newCheckInLogs = [];
      for (let checkInIndex in snapshotValue) {
        newCheckInLogs = [
          ...newCheckInLogs,
          {
            name: snapshotValue[checkInIndex].name,
          }
        ]
      }
      setCheckInLogs([...newCheckInLogs]);
    });
    firebaseApp.database().ref('users/nVffjHvNpDYEwizSFRmC7rqKyNS2').on('value', (snapshot) => {
      console.log('Log: Home -> snapshot', snapshot.val());
    });
  }, []);

  const handleAddName = () => {
    firebaseApp.database().ref('checkIn').push({
      name,
    });
  }

  const renderCheckInLogs = () => {
    return checkInLogs.map((checkInItem, checkInIndex) => (
      <p>{checkInItem.name}</p>
    ))
  }

  return (
    <div className="p-4">
      HOME/ Product List
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button className="btn btn-primary" onClick={() => handleAddName()}>Thêm</button>
      {renderCheckInLogs()}
    </div>
  );
}

export default Home;
