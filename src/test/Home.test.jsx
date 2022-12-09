import '@testing-library/jest-dom';
import {getByText, render, screen, within} from '@testing-library/react';
import axios from 'axios';
import expect from 'expect'
import { act } from 'react-dom/test-utils';
import { BrowserRouter} from 'react-router-dom';
import { ContextProvider } from '../Components/utils/global.context';
import Home from '../Routes/Home';

test('Card Data Test', async () => {

    
    render(
        <BrowserRouter>
            <ContextProvider>
                <Home/>
            </ContextProvider>
        </BrowserRouter>
        );

    const containerHome =  screen.getByRole("home-container");
    await axios.get(`https://jsonplaceholder.typicode.com/users`).then(
        res => {
            console.log(within(containerHome).getAllByRole(`odonto-card`).length);
            console.log(res.data.length);
            expect(within(containerHome).getAllByRole(`odonto-card`).length).toBe(res.data.length);
            // expect(within(containerHome).getAllByRole(`odonto-card`)).toHaveLength(res.data.length);
        }

    )
})