import React from 'react';
import cn from 'classnames';

const Pagination = ({ mailsPerPage, totalMails, currentPage, paginate, incPagePaginate, decPagePaginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalMails / mailsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <ul className='pagination'>
                <li className='disabled'>
                    <a href='#!' onClick={decPagePaginate}>
                        <i className='material-icons'>chevron_left</i>
                    </a>
                </li>
                {pageNumbers.map((item, index) => {
                    function setActivePage (page) {
                        if (item === page) {
                            return "waves-effect active"  
                        } else {
                            return "waves-effect"
                        }
                        
                    }
                    return (
                        <li key={index} className={setActivePage(currentPage)}>
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
                    <a href='#!' onClick={incPagePaginate}>
                        <i className='material-icons'>chevron_right</i>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
