import React, { Component } from 'react';
import { func } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends Component {
  static propTypes = {
    fetchBitcoin: func,
  }

  constructor(props) {
    super(props);
    this.state = { };
  }
  componentDidMount() {
    const {
      fetchBitcoin: fetchBTC = () => {},
    } = this.props;
    fetchBTC();
  }

  computeBitcoin() {
    const { bitcoin } = this.props;

    if (Object.keys(bitcoin).length === 0) return '';
    return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10);
  }
  render() {
    return (
      <h3>Bitcoin balance: {this.computeBitcoin()}</h3>
    );
  }
}

const mapStateToProps = ({
  balance: { balance = 0 },
  bitcoin: { bitcoin = {} },
}) => ({
  balance,
  bitcoin,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBitcoin,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Loot);
