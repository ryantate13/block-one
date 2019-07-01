import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Blocks from './Blocks';
import Block from './Block';
import mock_block from './mock_block';

Enzyme.configure({adapter: new Adapter()});

const dispatch = jest.fn(),
    blocks = Array(10).fill(null).reduce((acc, cur, id) => ({
        ...acc,
        [id]: {
            open: false,
            block: {
                ...mock_block,
                id: `${id}`
            }
        }
    }), {});

describe('<Blocks />', () => {
    it('renders an array of blocks', () => {
        const wrapper = shallow(<Blocks dispatch={dispatch} blocks={blocks} />);
        expect(wrapper.find(Block).length).toBe(10);
    });
});
