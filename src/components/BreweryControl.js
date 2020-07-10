import React, { Component } from 'react'
import Header from "./Header"
import BeerList from './BeerList'
import { connect } from "react-redux";
import * as a from '../actions'

function BreweryControl(props) {
  const showModal = () => this.props.dispatch(a.toggleCreate())

  const showDetailModal = () => this.props.dispatch(a.toggleDetails())

  const handleSubmit = (newKeg) => {
    this.props.dispatch(a.addKeg(newKeg))
    this.props.dispatch(a.toggleCreate())
  };

  const handleEdit = (keg, id) => this.props.dispatch(a.editKeg(keg, id))

  const handleCancel = () => this.props.dispatch(a.toggleCreate())

  const handleDetailClose = () => this.props.dispatch(a.toggleDetails())

  const servePint = id => this.props.dispatch(a.serve(id))

  const deleteKeg = id => this.props.dispatch(a.deleteKeg(id))

  return (
    <>
      <Header handleCancel={handleCancel} handleOk={handleSubmit} showModal={showModal} visible={this.props.formCreate} />
      <div className="main-body">
        <BeerList handleDelete={deleteKeg} servePint={servePint} beerList={this.props.beerList} visible={this.props.details} handleEdit={handleEdit} handleCancel={handleDetailClose} showModal={showDetailModal} />
      </div>
    </>
  )

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