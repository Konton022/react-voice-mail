import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const Table = ({ mails, loading }) => {
    const addZeroStr = (number) => {
        return number < 10 ? `0${number}` : `${number}`;
    };
    const showTime = (time) => {
        let seconds = Date.parse(time);
        let date = new Date(seconds);
        return `${addZeroStr(date.getDate())}.${addZeroStr(
            date.getMonth() + 1
        )} ${addZeroStr(date.getHours())}:${addZeroStr(date.getMinutes())}`;
    };
    if (loading) {
        return <h2>Loading...</h2>;
    }
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
                {mails.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{showTime(item.Received)}</td>
                            <td>{item.From}</td>
                            <td>
                                <ReactAudioPlayer
                                    src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
                                    controls
                                    onPlay={console.log('play')}
                                    
                                />
                                <span className='duration-item'>
                                    {item.Duration}
                                </span>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
