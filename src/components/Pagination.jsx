import React from 'react';
import cn from 'classnames';

const Pagination = ({ mailsPerPage, totalMails, currentPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalMails / mailsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <ul className='pagination'>
                <li className='disabled'>
                    <a href='#!'>
                        <i className='material-icons'>chevron_left</i>
                    </a>
                </li>
                {pageNumbers.map((item, index) => {
                    return (
                        <li key={index} className='waves-effect'>
                            <a
                                onClick={() => {
                                    paginate(item);
                                }}
                                href='#!'
                                className='page-link'
                            >
                                {item}
                            </a>
                        </li>
                    );
                })}
                <li className='waves-effect'>
                    <a href='#!'>
                        <i className='material-icons'>chevron_right</i>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
