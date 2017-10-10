import React from 'react';
import ReactShallowRenderer from 'react-test-renderer';

import Header from '../../components/Header';

test('should render Header component', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});
