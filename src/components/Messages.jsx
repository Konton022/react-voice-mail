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
    const currentMails = filtredMails.slice(indexOfFirstMail, indexOfLastMail);
    const totalPages = Math.ceil(filtredMails.length / mailsPerPage);

    //Set filter options

    const [period, setPeriod] = useState({
        value: 'allPeriod',
        label: 'Все время',
    });
    const [phoneNumber, setPhoneNumber] = useState('');
    const [duration, setDuration] = useState({ value: 'all', label: 'Все' });

    const periodOptions = [
        { value: 'allPeriod', label: 'Все время' },
        { value: '2016-12', label: 'За декабрь 2016 года' },
        { value: '2016-11', label: 'За ноябрь 2016 года' },
        { value: '2016-10', label: 'За октябрь 2016 года' },
        { value: '2016-09', label: 'За сентябрь 2016 года' },
        { value: '2016-08', label: 'За август 2016 года' },
        { value: '2016-07', label: 'За июль 2016 года' },
        { value: '2016-06', label: 'За июнь 2016 года' },
        { value: '2016-05', label: 'За май 2016 года' },
        { value: '2016-04', label: 'За апрель 2016 года' },
        { value: '2016-03', label: 'За март 2016 года' },
        { value: '2016-02', label: 'За февраль 2016 года' },
        { value: '2016-01', label: 'За январь 2016 года' },
        { value: '2015', label: 'За 2015 год' },
    ];
    const durationOptions = [
        { value: 'all', label: 'Все' },
        { value: 60, label: 'До 1ой минуты' },
        { value: 180, label: 'До 3х минут' },
        { value: 300, label: 'До 5ти минут' },
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

    const handleResetFilter = () => {
        setFiltredMails(mails);
        setPeriod({ value: 'allPeriod', label: 'Все время' });
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
    }, []);

    useEffect(() => {
        setFiltredMails(mails);
    }, [mails]);
    //set filter by duration
    useEffect(() => {
        if (duration.value === 'all') {
            setFiltredMails(filtredMails);
            return;
        }
        setFiltredMails(filtredMails.filter((item) => item.Duration <= duration.value));
    }, [duration.value]);

    // set filter by period
    useEffect(() => {
        if (period.value === 'allPeriod') {
            setFiltredMails(mails);
            return;
        }
        setFiltredMails(
            mails.filter(
                (item) =>
                    Date.parse(item.Received) >=
                        Date.parse(`${period.value}-01`) &&
                    Date.parse(item.Received) <=
                        Date.parse(`${period.value}-31`)
            )
        );
        setCurrentPage(1);
    }, [period.value]);

    return (
        <div className='container content'>
            <FilterForm
                period={period}
                setPeriod={setPeriod}
                periodOptions={periodOptions}
                duration={duration}
                setDuration={setDuration}
                durationOptions={durationOptions}
                handleResetFilter={handleResetFilter}
            />
            <Table mails={currentMails} loading={loading} />
            <Pagination
                mailsPerPage={mailsPerPage}
                totalMails={filtredMails.length}
                currentPage={currentPage}
                paginate={paginate}
                incPagePaginate={incPagePaginate}
                decPagePaginate={decPagePaginate}
            />
        </div>
    );
};

export default Messages;
