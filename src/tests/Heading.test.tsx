import React from 'react';
import { mount } from 'enzyme';
import { Heading } from '../components/Heading';


it('renders the header of the article', () => {
    const props = {
        elementType: 'text',
        value: 'heading example'
    }
    const heading = mount(<Heading value={props.value}/>);
    expect(heading.find('h1').length).toBe(1);
    expect(heading.find('h1').text()).toContain('heading example');
});

