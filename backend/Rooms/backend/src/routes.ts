import { Router, request, response, Request, Response} from 'express'
 
import { getRooms } from './controller/RoomController';
import { saveRooms } from './controller/RoomController';
import { getRoom } from './controller/RoomController';
import { updateRooms } from './controller/RoomController';
import { deleteRooms } from './controller/RoomController';
import { book } from './controller/RoomController';
import { checkOut } from './controller/RoomController';

const routes = Router()
 
routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Turma 007!' })
})
 
routes.get('/rooms', getRooms)
routes.post('/rooms', saveRooms)
routes.get('/Room/:id', getRoom)
routes.put('/Room/:id', updateRooms)
routes.delete('/Room/:id', deleteRooms)
routes.patch('/Room/:id', book)
routes.patch('/RoomCO/:id', checkOut)
 
export default routes
