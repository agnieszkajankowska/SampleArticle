import React from 'react';

interface Props {
    value: string
}

export const Author = (props: Props) => (
    <span>{props.value}</span>
)
