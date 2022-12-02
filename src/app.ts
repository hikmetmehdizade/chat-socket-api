import express, { Request, Response } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import recursive from "recursive-readdir";
import { SocketEvents, SocketFunc } from "./types";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (_: Request, res: Response) => {
  res.status(200).json("hello");
});

const server = createServer(app);

const io = new Server(server, {
  transports: ["websocket", "polling"],
  path: "/socket",
});

recursive(`${__dirname}/sockets`, [], (err, files) => {
  (async (f: string[]) => {
    for (let i = 0; i < f.length; ++i) {
      const socketFunc: SocketFunc = (await import(f[i])).default;
      io.use((socket, next) => {
        socketFunc(io, socket, next);
        next();
      });
    }
  })(files);
});

io.on(SocketEvents.connection, (socket) => {
  //   console.log("socket", socket);
  socket.join("room1");
});

export default server;
