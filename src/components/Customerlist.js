import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const Customerlist       = () => {
    const [customers, setCustomers] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetchCustomers();        

    }, [])

    const fetchCustomers = () => {

        fetch('https://customerrest.herokuapp.com/api/customers')
            .then(response => response.json())
            .then(data => setCustomers(data.content))
            .catch(err => console.error(err))
    }

    const columns = [
        {
            Header: 'First Name',
            accessor: 'firstname'
        },

        {
            Header: 'Last Name',
            accessor: 'lastname'
        },

        {
            Header: 'Street Address',
            accessor: 'streetaddress'
        },

        {
            Header: 'Postcode',
            accessor: 'postcode'
        },

        {
            Header: 'City',
            accessor: 'city'
        },

        {
            Header: 'Email',
            accessor: 'email'
        },

        {
            Header: 'Phone',
            accessor: 'phone'
        },

    ]
    return (
        <div>
          
            <ReactTable filterable={true} columns={columns} data={customers} />
        
        </div>
    );

};

export default Customerlist;