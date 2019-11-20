import * as React from 'react';
import { render } from 'enzyme';

import { Input } from '../../../src/components/atoms/Input';

describe('<Input />', () => {
  it('should render the component with given props', () => {
    const value = 'fake-value';
    const onChange = jest.fn();
    const wrapper = render(<Input value={value} onChange={onChange} />);
    expect(wrapper.val()).toEqual(value);
  });
});
