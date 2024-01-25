import { callSocket } from '../util/functions';


export async function emitSocket(req: Request, res: Response) {
    const { event, infos } = req.body;

    callSocket(req, [event], JSON.stringify(infos));
    return res.status(200).json({ status: true, message: 'Socket emitido com sucesso' });
}