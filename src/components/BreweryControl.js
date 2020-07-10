import React, { Component } from 'react'
import Header from "./Header"
import BeerList from './BeerList'
import { connect } from "react-redux";
import * as a from '../actions'

class BreweryControl extends Component {

  showModal = () => this.props.dispatch(a.toggleCreate())
  showDetailModal = () => this.props.dispatch(a.toggleDetails())
  handleSubmit = (newKeg) => {
    this.props.dispatch(a.addKeg(newKeg))
    this.props.dispatch(a.toggleCreate())
  };
  handleEdit = (keg, id) => this.props.dispatch(a.editKeg(keg, id))
  handleCancel = () => this.props.dispatch(a.toggleCreate())
  handleDetailClose = () => this.props.dispatch(a.toggleDetails())
  servePint = id => this.props.dispatch(a.serve(id))
  delete = id => this.props.dispatch(a.deleteKeg(id))

  render() {
    return (
      <>
        <Header handleCancel={this.handleCancel} handleOk={this.handleSubmit} showModal={this.showModal} visible={this.props.formCreate} />
        <div className="main-body">
          <BeerList handleDelete={this.delete} servePint={this.servePint} beerList={this.props.beerList} visible={this.props.details} handleEdit={this.handleEdit} handleCancel={this.handleDetailClose} showModal={this.showDetailModal} />
        </div>
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
    beerList: state.beerList,
    formCreate: state.formCreate,
    details: state.details
  }
}
BreweryControl = connect(mapStateToProps)(BreweryControl)
export default BreweryControl