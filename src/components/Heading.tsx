import React from 'react';

interface Props {
    value: string
}

export const Heading = (props: Props) => (
    <h1 className="display-4">{props.value}</h1>
)
