import React, { useEffect, useState } from 'react';
import { xmlData } from '../xml_data';
import FilterForm from './FilterForm';
import Pagination from './Pagination';
import Table from './Table';

const Messages = () => {
    const [mails, setMails] = useState([]);
    const [filtredMails, setFiltredMails] = useState(mails);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [mailsPerPage, setMailsPerPage] = useState(10);

    //Get current mails
    const indexOfLastMail = currentPage * mailsPerPage;
    const indexOfFirstMail = indexOfLastMail - mailsPerPage;
    const currentMails = mails.slice(indexOfFirstMail, indexOfLastMail);
    const totalPages = Math.ceil(mails.length / mailsPerPage);

    //Set filter options

    const [period, setPeriod] = useState({
        value: 'allPeriod',
        label: 'Все время',
    });
    const [phoneNumber, setPhoneNumber] = useState('');
    const [duration, setDuration] = useState('');

    const periodOptions = [
        { value: 'allPeriod', label: 'Все время' },
        { value: 'lasYear', label: 'За год' },
        { value: 'last3Years', label: 'За 3 года' },
        { value: 'last5Years', label: 'За 5 лет' },
        { value: 'last10years', label: 'За 10 лет' },
    ];

    const paginate = (numberPage) => {
        setCurrentPage(numberPage);
    };
    const incPagePaginate = () => {
        if (currentPage >= totalPages) {
            setCurrentPage(1);
        } else {
            setCurrentPage((preState) => preState + 1);
        }
    };
    const decPagePaginate = () => {
        if (currentPage <= 1) {
            setCurrentPage(totalPages);
        } else {
            setCurrentPage((preState) => preState - 1);
        }
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

    // set filter by period
    useEffect(() => {
        console.log(period.value);
        switch (period.value) {
            case 'oneYear':
                const lastYear = new Date() - 31536000000;
                setFiltredMails((prevState) =>
                    prevState.filter(
                        (item) => Date.parse(item.Received) > lastYear
                    )
                );
                break;
            case 'last3Years':
                const last3Years = new Date() - 31536000000 * 3;
                setFiltredMails((prevState) =>
                    prevState.filter(
                        (item) => Date.parse(item.Received) > last3Years
                    )
                );
                break;
            case 'last5Years':
                const last5Years = new Date() - 31536000000 * 5;
                setFiltredMails((prevState) =>
                    prevState.filter(
                        (item) => Date.parse(item.Received) > last5Years
                    )
                );
                break;
            case 'last10Years':
                const last10Years = new Date() - 31536000000 * 10;
                console.log(last10Years);

                mails.forEach((item) =>
                    console.log(Date.parse(item.Received) > last10Years)
                );
                break;

            default:
                break;
        }
    }, [period.value]);

    return (
        <div className='container content'>
            <FilterForm
                period={period}
                setPeriod={setPeriod}
                periodOptions={periodOptions}
            />
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
