import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Wallet } from './Wallet';


configure({ adapter: new Adapter() });

describe('<Wallet/>', () => {
  const props = {
    balance: 20,
  };

  const wallet = shallow(<Wallet {...props} />);
  it('renders properl', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('displays the balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet Balance: 20');
  });
});
