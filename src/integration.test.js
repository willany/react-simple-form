import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';

import App from './App';
import { REGISTER_URL } from './contants/api_url';
import { server } from './mocks/server';

describe('Register Form', () => {
    it('should create a register with success', async () => {
        render(<App />);

        const fieldName = screen.getByLabelText('Nome');
        expect(fieldName.value).toBe('');
        userEvent.type(fieldName, 'Willany');

        expect(fieldName.value).toBe('Willany');

        const ageName = screen.getByLabelText('Idade');
        expect(ageName.value).toBe('');
        userEvent.type(ageName, '30');

        expect(ageName.value).toBe('30');

        const submitButton = screen.getByRole('button');
        userEvent.click(submitButton);

        expect(await screen.findByText('Registro adicionado!')).toBeInTheDocument();
    });
    it('should create a register with failure', async () => {
        server.use(rest.post(REGISTER_URL, (req, res, ctx) => res(
            ctx.status(400),
        )));
        render(<App />);

        const fieldName = screen.getByLabelText('Nome');
        expect(fieldName.value).toBe('');
        userEvent.type(fieldName, 'Willany');

        expect(fieldName.value).toBe('Willany');

        const ageName = screen.getByLabelText('Idade');
        expect(ageName.value).toBe('');
        userEvent.type(ageName, '30');

        expect(ageName.value).toBe('30');

        const submitButton = screen.getByRole('button');
        userEvent.click(submitButton);

        expect(await screen.findByText('Um erro aconteceu')).toBeInTheDocument();
    });
});
