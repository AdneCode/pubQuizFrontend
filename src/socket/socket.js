import io from "socket.io-client";
import React from "react";

const apiUrl = `https://e9cc-144-178-197-146.eu.ngrok.io`;
export const socket = io(apiUrl, {
  transports: ["websocket"],
});
export const SocketContext = React.createContext(socket);
