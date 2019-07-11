import React from 'react';
import { shallow } from 'enzyme';

import UserSection from '../../../src/components/organisms/UserSection';
import UserList from '../../../src/components/molecules/UserList';


describe('<UserSection />', () => {
  it('should render the <UserList> component', () => {
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
    const wrapper = shallow(<UserSection users={users} />);
    expect(wrapper.find(UserList)).toHaveLength(1);
    expect(wrapper.text()).toContain('2 users found');
  });
});
