import React, { Component } from 'react';
import TokensMenu from './TokensMenu';
import AddToken from './AddToken';
import './index.scss';

class TokensPublic extends Component {
  render() {
    return (
      <div className="tokens contents">
        <TokensMenu />

        <div className="common-lists tokens-lists">
          <AddToken />

          <div className="token">
            <a href=""><i></i></a>
          </div>
          <div className="token">
            <a href=""><i></i></a>
          </div>
          <div className="token">
            <a href=""><i></i></a>
          </div>
        </div>

      </div>
    );
  }
}

export default TokensPublic;
