import React, { Component } from 'react';
import { connect } from 'react-redux';
import { number, func } from 'prop-types';
import { deposit, withdraw } from '../actions/balance';

export class Wallet extends Component {
    static propTypes = {
      balance: number,
      deposit: func,
      withdraw: func,
    }

    constructor() {
      super();
      this.state = {
        balance: 0,
      };
    }

    updateBalance = ({ target: { value: balance } }) => {
      this.setState({ balance: parseInt(balance, 10) });
    }

    deposit = () => this.props.deposit(this.state.balance);
    withdraw = () => this.props.withdraw(this.state.balance);
    render() {
      const {
        balance = 0,
      } = this.props;
      return (
        <div>
          <h3 className="balance">Wallet Balance: {balance}</h3>
          <br />
          <input className="input-wallet" onChange={this.updateBalance} />
          <button className="btn-deposit" onClick={this.deposit}>Deposit</button>
          <button className="btn-withdraw" onClick={this.withdraw}>Withdraw</button>
        </div>
      );
    }
}

const mapStateToProps = ({ balance: { balance } }) => ({
  balance,
});

const mapDispatchToProps = {
  deposit,
  withdraw,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
