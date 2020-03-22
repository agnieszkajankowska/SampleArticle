import React from 'react';
import { mount } from 'enzyme';
import { Author } from '../components/Author';

it('renders the author of the article', () => {
    const props = {
        elementType: 'text',
        value: 'John Doe'
    }
    const heading = mount(<Author value={props.value}/>);
    expect(heading.find('span').length).toBe(1);
    expect(heading.find('span').text()).toContain('John Doe');
});

