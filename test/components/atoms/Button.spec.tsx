import * as React from 'react';
import { render } from 'enzyme';

import { Button } from '../../../src/components/atoms/Button';

describe('<Button />', () => {
  it('should render the component with given props', () => {
    const text = 'fake-text';
    const onClick = jest.fn();
    const wrapper = render(<Button text={text} onClick={onClick} />);
    expect(wrapper.text()).toEqual(text);
  });

  it('should not have an attribute disabled if prop `disabled` is false', () => {
    const text = 'fake-text';
    const onClick = jest.fn();
    const wrapper = render(<Button text={text} onClick={onClick} disabled={false} />);
    expect(wrapper.attr('disabled')).toBeUndefined();
  });

  it('should have an attribute disabled if prop `disabled` is true', () => {
    const text = 'fake-text';
    const onClick = jest.fn();
    const wrapper = render(<Button text={text} onClick={onClick} disabled />);
    expect(wrapper.attr('disabled')).toEqual('disabled');
  });
});
