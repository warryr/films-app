import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CatalogMenu from '../view';

class CatalogMenuContainer extends React.Component {
  state = {
    currentSearchInput: '',
    currentCategory: '',
    pressedButton: undefined,
    sortValues: {
      sort: 'title',
      order: 1,
    },
  };

  handleInput = event => {
    const value = event.target.value;

    if (value !== this.state.currentSearchInput) {
      this.props.handleSettings({ search: value });
    }

    this.setState({ currentSearchInput: value });
  };

  handleChange = event => {
    this.setState(state => ({
      sortValues: {
        ...state.sortValues,
        [event.target.name]: event.target.value,
      },
    }));

    this.props.handleSettings({ [event.target.name]: event.target.value });
  };

  handleClick = (nextCategory, index) => {
    this.state.pressedButton === index
      ? this.setState({ pressedButton: undefined })
      : this.setState({ pressedButton: index });

    if (this.state.currentCategory === nextCategory && this.state.pressedButton === index) {
      this.props.handleSettings({ category: '' });
      this.setState({ currentCategory: '' });
    } else {
      this.props.handleSettings({ category: nextCategory });
      this.setState({ currentCategory: nextCategory });
    }
  };

  render = () => {
    return (
      <CatalogMenu
        categories={this.props.categories.items}
        loading={this.props.categories.loading}
        sortValues={this.state.sortValues}
        pressedButton={this.state.pressedButton}
        handleInput={this.handleInput}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
      />
    );
  };
}

const mapStateToProps = state => ({
  categories: state.catalog.categories,
});

CatalogMenuContainer.propTypes = {
  handleSettings: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(CatalogMenuContainer);
