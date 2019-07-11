import React from 'react';
import { shallow } from 'enzyme';

import { Home, mapStateToProps } from '../../../src/components/pages/Home';
import UserSection from '../../../src/components/organisms/UserSection';


describe('<Home />', () => {
  it('should render the <UserSection> component', () => {
    const users = [
      {
        firstName: 'Bruce',
        lastName: 'Wayne',
        email: 'bruce@wayne-enterprises.com',
      },
      {
        firstName: 'Lucius',
        lastName: 'Fox',
        email: 'lucius.fox@wayne-enterprises.com',
      },
    ];
    const dispatch = jest.fn();
    const wrapper = shallow(<Home users={users} dispatch={dispatch} />);
    expect(wrapper.find(UserSection)).toHaveLength(1);
  });

  it('should render a loading div if component has loading prop', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<Home loading users={[]} dispatch={dispatch} />);
    expect(wrapper.text()).toEqual('Loading...');
  });

  it('should render an error if an error occured', () => {
    const dispatch = jest.fn();
    const error = 'A_BIG_ERROR';
    const wrapper = shallow(<Home error={error} users={[]} dispatch={dispatch} />);
    expect(wrapper.text()).toEqual('An error occured: A_BIG_ERROR');
  });

  describe('mapStateToProps', () => {
    it('should return user from state', () => {
      const state = {
        user: { loading: false, error: null, users: [] },
        powers: { loading: false, error: null, list: [] },
      };
      expect(mapStateToProps(state)).toEqual(state.user);
    });
  });
});
