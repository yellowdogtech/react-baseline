import React, { PropTypes } from 'react';
import Owner from './Owner';

const OwnerList = ({owners}) => {
  return (
    <div>
      {
        owners.map(owner =>
          <Owner key={owner.name} owner={owner}/>
        )
      }
    </div>
  );
};

OwnerList.propTypes = {
  owners: PropTypes.array.isRequired
};

export default OwnerList;
