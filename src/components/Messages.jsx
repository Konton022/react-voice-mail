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

     //Get current mails
     const indexOfLastMail = currentPage * mailsPerPage;
     const indexOfFirstMail = indexOfLastMail - mailsPerPage;
     const currentMails = mails.slice(indexOfFirstMail, indexOfLastMail);
     const totalPages = Math.ceil(mails.length / mailsPerPage)

    const paginate = (numberPage) => {
        setCurrentPage(numberPage);
    };
    const incPagePaginate = () => {
        if (currentPage >= totalPages) {
            setCurrentPage(1)
        }
        else {setCurrentPage( preState => preState + 1)
        }
    }
    const decPagePaginate = () => {
        if (currentPage <= 1) {
            setCurrentPage(totalPages)
        }
        else {setCurrentPage( preState => preState - 1)
        }
    }
    
        

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

   

    return (
        <div className='container content'>
            <FilterForm />
            <Table mails={currentMails} loading={loading} />
            <Pagination
                mailsPerPage={mailsPerPage}
                totalMails={mails.length}
                currentPage={currentPage}
                paginate={paginate}
                incPagePaginate={incPagePaginate}
                decPagePaginate={decPagePaginate}
            />
        </div>
    );
};

export default Messages;
