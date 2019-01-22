import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postItem } from '../../../../data/store/resources/items/actions';
import ItemForm from './Form';

const ItemCreate = ({ postItem }) => {

  return (
    <div>
      <ItemForm onSubmit={postItem}/>
    </div>
  );
};

ItemCreate.propTypes = {
  postItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  postItem: () => dispatch(postItem())
});

const Data = connect(mapStateToProps, mapDispatchToProps);

export default Data(ItemCreate);
