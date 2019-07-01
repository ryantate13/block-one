import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';
import BlockLoader from './BlockLoader';
import mock_block from './mock_block';

Enzyme.configure({adapter: new Adapter()});

const dispatch = jest.fn();

describe('<Header />', () => {
    it('generates a header', () => {
        const wrapper = shallow(<Header blocks={{}} dispatch={dispatch} loading={false} />);
        expect(wrapper.find('header').length).toBe(1);
    });

    it('shows a block loader when data is present in content area', () => {
        const wrapper = shallow(<Header
            blocks={{[mock_block.id]: {open: false, block: mock_block}}}
            dispatch={dispatch}
            loading={false}
        />);
        expect(wrapper.find(BlockLoader).length).toBe(1);
    });
});
