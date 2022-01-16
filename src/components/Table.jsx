import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const Table = ({ mails }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Дата</th>
                    <th>Номер</th>
                    <th>Запись сообщения</th>
                </tr>
            </thead>

            <tbody>
                {mails.map((item) => {
                    return (
                        <tr>
                            <td>{item.Received}</td>
                            <td>{item.From}</td>
                            <td>
                                <ReactAudioPlayer
                                    src='/src/assets/audio1.mp3'
                                    autoPlay
                                    controls
                                />
                                <span>{item.Duration}</span>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
