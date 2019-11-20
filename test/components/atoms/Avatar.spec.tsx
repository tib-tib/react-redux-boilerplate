import * as React from 'react';
import { render } from 'enzyme';

import { Avatar } from '../../../src/components/atoms/Avatar';

describe('<Avatar />', () => {
  it('should render the component with given props', () => {
    const avatarUrl = 'fake-avatar-url';
    const wrapper = render(<Avatar url={avatarUrl} />);
    expect(wrapper.attr('src')).toEqual(avatarUrl);
    expect(wrapper.attr('alt')).toEqual('avatar');
  });
});
