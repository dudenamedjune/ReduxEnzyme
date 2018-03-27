import React, { Component } from 'react';
import { connect } from 'react-redux';
import { number } from 'prop-types';

export class Wallet extends Component {
    static propTypes = {
      balance: number,
    }
    render() {
      const {
        balance = 0,
      } = this.props;
      return (
        <div>
          <h3 className="balance">Wallet Balance: {balance}</h3>
        </div>
      );
    }
}

const mapStateToProps = ({ balance }) => ({
  balance,
});

export default connect(mapStateToProps, null)(Wallet);
