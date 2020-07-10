import React, { Component } from 'react'
import Header from "./Header"
import BeerList from './BeerList'
import { connect } from "react-redux";

class BreweryControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formModalVisible: false,
      detailsVisible: false,
      masterKegList: [],
    };
  }

  showModal = () => {
    this.props.dispatch({ type: "TOGGLE_CREATE" })
  };

  showDetailModal = () => {
    this.setState({
      detailsVisible: true,
    });
  };
  showEditModal = () => {
    this.setState({
      editsVisible: true,
    });
  };


  handleSubmit = (newKeg) => {
    this.props.dispatch({ type: "ADD_KEG", keg: newKeg })
    this.props.dispatch({ type: "TOGGLE_CREATE" })
  };

  handleEdit = (keg, id) => {
    this.props.dispatch({ type: "EDIT_KEG", keg, id })
  }


  handleCancel = e => {
    this.props.dispatch({ type: "TOGGLE_CREATE" })
  };
  handleDetailClose = e => {
    this.setState({
      detailsVisible: false,
    });
  };
  servePint = id => {
    this.props.dispatch({ type: "SERVE", id })
  }
  delete = id => {
    this.props.dispatch({ type: "DELETE_KEG", id })
  }
  render() {
    return (
      <>
        <Header handleCancel={this.handleCancel} handleOk={this.handleSubmit} showModal={this.showModal} visible={this.props.formCreate} />
        <div className="main-body">
          <BeerList handleDelete={this.delete} servePint={this.servePint} beerList={this.props.beerList} visible={this.state.detailsVisible} handleEdit={this.handleEdit} handleCancel={this.handleDetailClose} showModal={this.showDetailModal} />
        </div>
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
    beerList: state.beerList,
    formCreate: state.formCreate
  }
}
BreweryControl = connect(mapStateToProps)(BreweryControl)
export default BreweryControl