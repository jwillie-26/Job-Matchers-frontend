import React from 'react';

const RecentJobsCard = (props) => {
  return (
    <div>
      <h2 style={{ position: 'absolute', top: '0', Right: '0' }}>{props.name}</h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ marginRight: '16px' }}>{props.title}</div>
        <div style={{ marginRight: '16px' }}>{props.location}</div>
        <div>{props.employmentType}</div>
      </div>
    </div>
  );
}

export default RecentJobsCard;