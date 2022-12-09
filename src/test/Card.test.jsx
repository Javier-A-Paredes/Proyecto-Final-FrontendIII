import '@testing-library/jest-dom';
import { findByText, getByText, render, screen} from '@testing-library/react';
import axios from 'axios';
import Card from '../Components/Card';
import expect from 'expect'
import { BrowserRouter, Routes } from 'react-router-dom';
import { ContextProvider } from '../Components/utils/global.context';

test('Card Data Test', async () => {
    await axios.get(`https://jsonplaceholder.typicode.com/users`).then(
        res => {
            render(
            <BrowserRouter>
                <ContextProvider>
                    <Card key={res.data[0].id} name={res.data[0].name} username={res.data[0].username} id={res.data[0].id}/> 
                </ContextProvider>
            </BrowserRouter>
            );
            expect((screen.getByText(res.data[0].name))).toBeInTheDocument();
            expect((screen.getByText(res.data[0].username))).toBeInTheDocument();
        }
    )
})