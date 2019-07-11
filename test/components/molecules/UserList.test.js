import React from 'react';
import { shallow } from 'enzyme';

import UserList from '../../../src/components/molecules/UserList';
import User from '../../../src/components/atoms/User';

describe('<UserList />', () => {
  it('should render 2 <User> component', () => {
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
    const wrapper = shallow(<UserList users={users} />);
    expect(wrapper.find(User)).toHaveLength(2);
  });
});
