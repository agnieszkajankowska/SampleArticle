import React from 'react';

interface Props {
    value: string
}

export const Author = (props: Props) => (
    <div className="text-muted author-name">{props.value}</div>
)
