import { Server, Socket } from "socket.io";
import { ExtendedError } from "socket.io/dist/namespace";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

type IO = Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;
type SocketNextFunction = (err?: ExtendedError | undefined) => void;

export type SocketFunc = (
  oi: IO,
  socket: Socket,
  next: SocketNextFunction
) => void;


export {SocketEvents} from './events'
export * from './inputs'