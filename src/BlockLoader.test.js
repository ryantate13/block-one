import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BlockLoader from './BlockLoader';

Enzyme.configure({adapter: new Adapter()});

const dispatch = jest.fn(() => {
});

describe('<BlockLoader />', () => {
    it('generates a button', () => {
        const wrapper = shallow(<BlockLoader dispatch={dispatch} loading={false}/>);
        expect(wrapper.find('button').length).toBe(1);
    });

    it('call dispatch when clicked', () => {
        const wrapper = shallow(<BlockLoader dispatch={dispatch} loading={false}/>);
        expect(dispatch).not.toHaveBeenCalled();
        wrapper.find('button').simulate('click');
        expect(dispatch).toHaveBeenCalled();
    });

    it('is disabled when loading', () => {
        const wrapper = shallow(<BlockLoader dispatch={dispatch} loading={false}/>);
        expect(wrapper.find('button').prop('disabled')).toBeFalsy();
        wrapper.setProps({loading: true});
        wrapper.update();
        expect(wrapper.find('button').prop('disabled')).toBeTruthy();
    });
});
