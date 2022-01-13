import { rest } from 'msw';
import { REGISTER_URL } from '../contants/api_url';

export const handlers = [
    rest.post(REGISTER_URL, (req, res, ctx) => res(
        ctx.status(200),
    ))
];