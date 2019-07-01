import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Block from './Block';
import mock_block from './mock_block';

Enzyme.configure({adapter: new Adapter()});

const dispatch = jest.fn();

describe('<Block />', () => {
    it('generates a block div', () => {
        const wrapper = shallow(<Block block={mock_block} dispatch={dispatch} open={false}/>);
        ['block', 'hash', 'timestamp', 'transactions', 'toggle', 'raw']
            .forEach(className => expect(wrapper.find(`.${className}`).length).toBe(1));
    });

    it('calls dispatch when toggle clicked', () => {
        const wrapper = shallow(<Block block={mock_block} dispatch={dispatch} open={false}/>);
        expect(dispatch).not.toHaveBeenCalled();
        expect(wrapper.find('.open').length).toBe(0);
        wrapper.find('.toggle').simulate('click');
        expect(dispatch).toHaveBeenCalledWith({type: 'toggle_block', id: mock_block.id});
    });

    it('has open class when opened', () => {
        const wrapper = shallow(<Block block={mock_block} dispatch={dispatch} open={true}/>);
        expect(wrapper.find('.open').length).toBe(1);
    });
});
