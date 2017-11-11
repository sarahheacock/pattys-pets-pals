import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

import EditModal from '../components/modals/EditModal';
import EditButton from '../components/buttons/EditButton';


const Footer = (props) => {
  return (
    <footer className="text-center">

      <EditModal
        user={props.user}
        edit={props.edit}
        message={props.message}

        putData={props.putData}
        postData={props.postData}
        deleteData={props.deleteData}

        updateState={props.updateState}
      />

      <Row className="clearfix">
        <Col sm={6}>
         <hr />
          <h3 className="pretty">This page was built with</h3>
          <h3><a href="https://www.sarahwebdeveloper.com"><i className="fa fa-heart footer-icon" aria-hidden="true"></i></a> and <a href="https://www.sarahwebdeveloper.com"><i className="fa fa-coffee footer-icon" aria-hidden="true"></i></a></h3>
          <h4>by Sarah Heacock</h4>
          <br />
          <hr />
        </Col>

        <Col sm={6}>
          <hr />
          <h3 className="pretty">Contact Patty by</h3>
          <h3><i className="fa fa-phone footer-icon" aria-hidden="true"></i> or
            <EditButton
              user={props.user}
              updateState={props.updateState}
              dataObj={{}}
              title="Send Message"
              route="footer"
            />
          </h3>
          <h4>{(props.data.p2).map((d, i) => <span key={`${i}footers`}>{d}<br /></span>)}</h4>
          <hr />
        </Col>
      </Row>

      <br />
      <EditButton
        user={props.user}
        updateState={props.updateState}
        dataObj={{p1: props.data.p1}}
        title="Edit"
        route="footer"
      />
      {props.data.p1.split('\n').map((p, i) => <h4 key={`${i}footer`}><i>{p}</i></h4>)}
      <h3 className='text-center'><i className="fa fa-paw footer-icon" aria-hidden="true"></i></h3>
      <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

    </footer>

  );
}


export default Footer;

Footer.propTypes = {
  user: PropTypes.object.isRequired,
  edit: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,

  putData: PropTypes.func.isRequired,
  postData: PropTypes.func.isRequired,
  deleteData: PropTypes.func.isRequired,

  updateState: PropTypes.func.isRequired,
};
