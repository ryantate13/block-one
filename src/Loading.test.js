import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loading from './Loading';

Enzyme.configure({adapter: new Adapter()});

describe('<Loading />', () => {
    it('generates a spinner', () => {
        const wrapper = shallow(<Loading />);
        expect(wrapper.find('span').length).toBe(1);
    });
});
