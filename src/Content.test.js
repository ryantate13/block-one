import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Content from './Content';
import BlockLoader from './BlockLoader';
import Blocks from './Blocks';
import mock_block from './mock_block';

Enzyme.configure({adapter: new Adapter()});

const dispatch = jest.fn();

describe('<Content />', () => {
    it('generates the main content area', () => {
        const wrapper = shallow(<Content blocks={{}} dispatch={dispatch} loading={false} />);
        expect(wrapper.find(BlockLoader).length).toBe(1);
    });

    it('displays error messages when present', () => {
        const wrapper = shallow(<Content blocks={{}} dispatch={dispatch} loading={false} error={'foo'} />);
        expect(wrapper.find('.error').length).toBe(1);
    });

    it('shows blocks when data is present', () => {
        const wrapper = shallow(<Content
            blocks={{[mock_block.id]: {open: false, block: mock_block}}}
            dispatch={dispatch}
            loading={false}
        />);
        expect(wrapper.find(BlockLoader).length).toBe(0);
        expect(wrapper.find(Blocks).length).toBe(1);
    });
});
