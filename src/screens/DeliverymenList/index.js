import React, { useCallback, useEffect, useState } from 'react';
import PersonCard from '../../components/PersonCard';
import GlobalMenu from '../../components/GlobalMenu';
import api from '../../services/api';

const DeliverymenList = () => {
    const [list, setList] = useState([]);

    const loadingDeliverymen = useCallback(async () => {
        try {
            const response = await api.get('/users');
            if (response.data) setList(response.data);
        } catch (error) {
            console.log('Ocorreu uma falha na comunicação com a API.');
        }
    }, []);

    useEffect(() => {
        loadingDeliverymen();
    }, [loadingDeliverymen]);

    return (
        <>
            <GlobalMenu />
            <h2>Lista de Entregadores</h2>

            <ul>
                {list.map(d => {
                    return (
                        <PersonCard key={d.id} data={d} />
                    );
                })}
            </ul>
        </>
    );
}

export default DeliverymenList;