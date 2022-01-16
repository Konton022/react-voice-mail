import React, { useEffect, useState } from 'react';
import { xmlData } from '../xml_data';
import Table from './Table';

const Messages = () => {
    const [mails, setMails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [mailsPerPage, setMailsPerPage] = useState(10);

    useEffect(() => {
        //for fetching data from server:
        // setLoadind(true)
        // fetch(Url).then(resp => resp.text().then(data=> {
        //     const { XMLParser } = require('fast-xml-parser');
        //     const parser = new XMLParser();
        //     let jObj = parser.parse(xmlData);
        // setMails(jObj.Root.Data);
        // }))
        // setLoadind(false)

        const { XMLParser } = require('fast-xml-parser');

        const parser = new XMLParser();
        let jObj = parser.parse(xmlData);
        setMails(jObj.Root.Data);
        //console.log(jObj.Root.Data);
    }, []);
    return (
        <div className='container content'>
            <Table mails={mails} />
        </div>
    );
};

export default Messages;
