import React from 'react';
import { render } from 'enzyme';

import User from '../../../src/components/atoms/User';

describe('<User />', () => {
  it('renders the component with given props', () => {
    const user = {
      firstName: 'Bruce',
      lastName: 'Wayne',
      email: 'bruce@wayne-enterprises.com',
    };
    const wrapper = render(<User user={user} />);
    expect(wrapper.text()).toContain('Name: Bruce');
    expect(wrapper.text()).toContain('Surname: Wayne');
    expect(wrapper.text()).toContain('Email: bruce@wayne-enterprises.com');
  });
});
