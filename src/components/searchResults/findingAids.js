import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getFindingAids } from '../../actions/findingAids'

export class FindingAids extends Component {
  static propTypes = {
    findingAids: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.getFindingAids();
  }

  render() {
    return (
      <Fragment>
        <center><h1>Finding Aids List</h1></center>
        { this.props.findingAids.map((findingAid, i) => (
        <div className="finding-aid card" key={i}>
          <div className="card-body">
            <h5 className="card-title">Title: {findingAid.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Subject: {findingAid.subject}</h6>
            <p className="card-text">Repository ID: {findingAid.repository}</p>
            <p className="card-text">XML: {findingAid.xml}</p>
          </div>
        </div>
        ))}
      </Fragment>
    )
  }
};

const mapStateToProps = state => ({
  findingAids: state.findingAids.findingAids
})


export default connect(mapStateToProps, { getFindingAids })(FindingAids);