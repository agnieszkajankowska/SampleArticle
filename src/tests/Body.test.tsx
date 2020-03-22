import React from 'react';
import { render } from 'enzyme';
import { Body } from '../components/Body';

it('renders the body of the article', () => {
    const props = {
        elementType: 'formattedText',
        values: ['<p>first paragraph</p>', '<p>second paragraph</p>', '<p>third paragraph</p>']
    }
    const paragraphsList = render(<Body paragraphs={props.values}/>);
    expect(paragraphsList.find('p').length).toBe(props.values.length);
    expect(paragraphsList.html()).toContain('<p>first paragraph</p><p>second paragraph</p><p>third paragraph</p>');
});

