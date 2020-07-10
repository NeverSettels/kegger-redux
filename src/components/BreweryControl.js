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
    this.setState({
      formModalVisible: true,
    });
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
    this.setState({
      formModalVisible: false
    });
  };

  handleEdit = (keg, id) => {
    this.props.dispatch({ type: "EDIT_KEG", keg, id })
  }


  handleCancel = e => {
    this.setState({
      formModalVisible: false,
    });
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
        <Header handleCancel={this.handleCancel} handleOk={this.handleSubmit} showModal={this.showModal} visible={this.state.formModalVisible} />
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
  }
}
BreweryControl = connect(mapStateToProps)(BreweryControl)
export default BreweryControl