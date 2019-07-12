import React from 'react';
import HeaderContainer from '../modules/Header/containers';

const ProtectedLayout = props => {
  const Content = props.content;
  return (
    <React.Fragment>
      <HeaderContainer />
      <Content />
    </React.Fragment>
  );
};

export default ProtectedLayout;
