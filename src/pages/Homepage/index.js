import { useState, useContext } from 'react';
import { SocketContext } from '../../socket';

export const Homepage = () => {
    const [code, setCode] = useState('');
    const [name, setName] = useState('');

    //In order to retrieve the socket out from the useContext hook, we need to import useContext from react and SocketContext from ../socket
    //Next we retrieve the socket out of the context:
    const socket = useContext(SocketContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { code, name };
        //Connect to socket.io
        //Socket.emit is sending a message to the server. If socket.emit is used in the backend, the server is sending something to the client.
        //We declare 'joinRoom' to the socket.emit method. In the backend, socket.on('joinRoom') is declared, the string needs to be identical
        //to the string declared in the client. The second (optional) parameter (data) is used to declare what information we are going to send. In our case,
        //we send the data that was declared in the above. In the server, the second parameter will refer to that same piece of information, so the server
        //receives exactly the same piece of data.
        socket.emit('joinRoom', data);
    };

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input
                    placeholder="Code"
                    type="text"
                    value={ code }
                    onChange={ (e) => setCode(e.target.value) }
                ></input>
                <br></br>
                <input
                    placeholder="Name"
                    type="text"
                    value={ name }
                    onChange={ (e) => setName(e.target.value) }
                ></input>
                <button type="submit">Join</button>
            </form>
        </div>
    );
};
