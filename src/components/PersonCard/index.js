import React, { useState } from 'react';
import { shell } from 'electron';
import { Card, Button } from './styles';

const PersonCard = ({ data }) => {
    const [active, setActive] = useState(true);

    return (
        <Card status={active}>
            <p>Nome: {data.login} id:{data.id}</p>
            <Button onClick={() => {
                shell.openExternal(data.html_url)
            }}>
                site
            </Button>
            <Button onClick={() => {
                const apdateStatus = active;
                setActive(!apdateStatus);
            }}>Status</Button>
        </Card>
    );
}

export default PersonCard;