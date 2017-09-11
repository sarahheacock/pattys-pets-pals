import React from 'react';
import PropTypes from 'prop-types';

import EditButton from '../buttons/EditButton';

const Services = (props) => {
  console.log("service", props);

  const contentService = (key) => (
    <div className="content">
      <h3 className="pretty text-center">{key}</h3>
      <div className="flex-container">
        {(Object.keys(props.data[key])).map((s) => (
          <div className="service text-center" key={s}>
            <h4>{s}</h4>
            <h3><i className={props.data[key][s]} aria-hidden="true"></i></h3>
          </div>
        ))}
      </div>
    </div>
  );

  const areaContent = (props.data["p1"]).split("\n").map((a) => (
    <h4 key={a} className="text-center">{a}</h4>
  ));


  return (
      <div>
        <div className="content">
          <h3 className="pretty text-center">{"Areas Serviced"}</h3>
          <div>{areaContent}</div>
          <div className="text-center">
            <EditButton
              user={props.user}
              updateState={props.updateState}
              dataObj={{p1: props.data["p1"]}}
              title="Edit"
              route="services"
            />
          </div>
        </div>
        <div>{contentService("Pet Services Provided")}</div>
        <div>{contentService("Other Services if on Vacation")}</div>
      </div>
  );
}

export default Services;

Services.propTypes = {
  data: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  updateState: PropTypes.func.isRequired
}
