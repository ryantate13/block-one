import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BlockLoader from './BlockLoader';

Enzyme.configure({adapter: new Adapter()});

const dispatch = jest.fn();

describe('<BlockLoader />', () => {
    it('generates a button', () => {
        const wrapper = shallow(<BlockLoader dispatch={dispatch} loading={false}/>);
        expect(wrapper.find('button').length).toBe(1);
    });

    it('calls dispatch when clicked', () => {
        const wrapper = shallow(<BlockLoader dispatch={dispatch} loading={false}/>);
        expect(dispatch).not.toHaveBeenCalled();
        wrapper.find('button').simulate('click');
        expect(dispatch).toHaveBeenCalledWith({type: 'get_blocks'});
    });

    it('is disabled when loading', () => {
        const wrapper = shallow(<BlockLoader dispatch={dispatch} loading={false}/>);
        expect(wrapper.find('button').prop('disabled')).toBeFalsy();
        wrapper.setProps({loading: true});
        wrapper.update();
        expect(wrapper.find('button').prop('disabled')).toBeTruthy();
    });

    it('supports ghost style', () => {
        const wrapper = shallow(<BlockLoader dispatch={dispatch} loading={false} ghost={false}/>);
        expect(wrapper.find('.ghost').length).toBe(0);
        wrapper.setProps({ghost: true});
        wrapper.update();
        expect(wrapper.find('.ghost').length).toBe(1);
    });
});
