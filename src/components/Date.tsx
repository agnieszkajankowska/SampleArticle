import React from 'react';

interface Props {
    value: string
}

export const DateComponent = (props: Props) => {
    const date = new Date(props.value)
    const formattedDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    return <div>{formattedDate}</div>
}

