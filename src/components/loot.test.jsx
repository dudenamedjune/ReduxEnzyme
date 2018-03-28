import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Loot } from './Loot';

configure({ adapter: new Adapter() });
describe('Loot', () => {
  const mockFetchBitcoin = jest.fn();
  let props = { balance: 10, bitcoin: {} };
  let LootComponent = shallow(<Loot {...props} />);

  it('renders without blowing up', () => {
    expect(LootComponent).toMatchSnapshot();
  });

  describe('when mounted', () => {
    beforeEach(() => {
      props.fetchBitcoin = mockFetchBitcoin;
      LootComponent = mount(<Loot {...props} />);
    });
    it('dispatches the `fetchBitcoin` method it recieves from props', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled();
    });
  });

  describe('when there are valid bitcoin props', () => {
    beforeEach(() => {
      props = { balance: 10, bitcoin: { bpi: { USD: { rate: '7,500' } } } };
      LootComponent = shallow(<Loot {...props} />);
    });
  });

  it('displays the correct bitcoin value', () => {
    expect(LootComponent.find('h3').text()).toEqual('Bitcoin balance: 0.01');
  });
});
