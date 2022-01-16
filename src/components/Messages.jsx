import React, { useEffect, useState } from 'react';
import { xmlData } from '../xml_data';
import FilterForm from './FilterForm';
import Pagination from './Pagination';
import Table from './Table';

const Messages = () => {
    const [mails, setMails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [mailsPerPage, setMailsPerPage] = useState(10);

    const paginate = (numberPage) => {
        setCurrentPage(numberPage);
    };

    useEffect(() => {
        //for fetching data from server:
        // setLoadind(true)
        // fetch(Url).then(resp => resp.text().then(data=> {
        //     const { XMLParser } = require('fast-xml-parser');
        //     const parser = new XMLParser();
        //     let jObj = parser.parse(data);
        // setMails(jObj.Root.Data);
        // }))
        // setLoadind(false)

        const { XMLParser } = require('fast-xml-parser');

        const parser = new XMLParser();
        let jObj = parser.parse(xmlData);
        setMails(jObj.Root.Data);
        //console.log(jObj.Root.Data);
    }, []);

    //Get currnet posts
    const indexOfLastMail = currentPage * mailsPerPage;
    const indexOfFirstMail = indexOfLastMail - mailsPerPage;
    const currentMails = mails.slice(indexOfFirstMail, indexOfLastMail);

    return (
        <div className='container content'>
            <FilterForm />
            <Table mails={currentMails} loading={loading} />
            <Pagination
                mailsPerPage={mailsPerPage}
                totalMails={mails.length}
                currentPage={currentPage}
                paginate={paginate}
            />
        </div>
    );
};

export default Messages;
