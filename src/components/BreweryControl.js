import React, { Component } from 'react'
import Header from "./Header"
import BeerList from './BeerList'

export default class BreweryControl extends Component {
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
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formModalVisible: false
    });
  };

  handleEdit = (editedKeg, id) => {
    this.setState(state => {
      const masterKegList = state.masterKegList.map(beer => {
        if (id === beer.id) {
          return { ...editedKeg }
        } else {
          return beer
        }
      });
      return { masterKegList }
    })
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
    this.setState(state => {
      const masterKegList = state.masterKegList.map(beer => {
        if (beer.id === id && beer.pints > 0) {
          return { ...beer, pints: beer.pints - 1 }
        } else {
          return beer
        }
      })
      return { masterKegList }
    })
  }
  delete = id => {
    const masterKegList = this.state.masterKegList.filter(shirt => shirt.id !== id)
    this.setState({ masterKegList })
  }
  render() {
    return (
      <>
        <Header handleCancel={this.handleCancel} handleOk={this.handleSubmit} showModal={this.showModal} visible={this.state.formModalVisible} />
        <div className="main-body">
          <BeerList handleDelete={this.delete} servePint={this.servePint} beerList={this.state.masterKegList} visible={this.state.detailsVisible} handleEdit={this.handleEdit} handleCancel={this.handleDetailClose} showModal={this.showDetailModal} />
        </div>
      </>
    )
  }
}
