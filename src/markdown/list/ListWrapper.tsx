import React from 'react';

import { List } from '@mui/material';

type Props = {
    children: JSX.Element,
}

export default function ListWrapper({ children }: Props) {
    return (
        <List dense={true} sx={{ marginBottom: 4 }}>
            {children}
        </List>
    );
}