import React, { useState, useEffect } from 'react';  
import { useTable } from 'react-table';  
  
function Pending_Table(){    

     const data = React.useMemo(
       () => [
        {  
        priority: 'High',  
        c_ref: 'C0001',
        c_rec: '27-03-2001',
        product: 'Product A',
        prod_code: 'FP106',
        customer: 'BJ Shopping Mart',
        prod_bb: '27-03-2016',
        prod_date: '27-03-2016',
        prod_line: 'Line 1',
        shift: 'Days',
        complaint: 'Quality',
        },{  
        priority: 'Medium',  
        c_ref: 'C0001',
        c_rec: '27-03-2001',
        product: 'Product A',
        prod_code: 'FP106',
        customer: 'BJ Shopping Mart',
        prod_bb: '27-03-2016',
        prod_date: '27-03-2016',
        prod_line: 'Line 1',
        shift: 'Days',
        complaint: 'Quality',
        },{  
        priority: 'Low',  
        c_ref: 'C0001',
        c_rec: '27-03-2001',
        product: 'Product A',
        prod_code: 'FP106',
        customer: 'BJ Shopping Mart',
        prod_bb: '27-03-2016',
        prod_date: '27-03-2016',
        prod_line: 'Line 1',
        shift: 'Days',
        complaint: 'Quality',
        },{  
        priority: 'High',  
        c_ref: 'C0001',   
        c_rec: '27-03-2001',
        product: 'Product A',
        prod_code: 'FP106',
        customer: 'BJ Shopping Mart',
        prod_bb: '27-03-2016',
        prod_date: '27-03-2016',
        prod_line: 'Line 1',
        shift: 'Days',
        complaint: 'Quality',
        },
      ],
      []
    )  

     const columns = React.useMemo(
       () => 
       [{  
       Header: 'Priority',  
       accessor: 'priority'  
       },{  
       Header: 'Complaint Ref',  
       accessor: 'c_ref'  
       },{  
        Header: 'Complaint Received',  
        accessor: 'c_rec'  
        },{  
        Header: 'Product',  
        accessor: 'product'  
        },{  
        Header: 'Product Code',
        accessor: 'prod_code'
        },{
        Header: 'Customer',  
        accessor: 'customer'  
        },{  
        Header: 'Product BB/UB',  
        accessor: 'prod_bb'  
        },{  
        Header: 'Product Date',  
        accessor: 'prod_date'  
        },{
        Header: 'Production Line',
        accessor: 'prod_line'
        },{ 
        Header: 'Shift',  
        accessor: 'shift'  
        },{  
        Header: 'Complaint',  
        accessor: 'complaint'  
        },
      ],
      []
     )

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, data })

    return (
      <div style={{position: 'absolute', left: '6%', top: '25.7%',}}>
        <h6>Pending Requests</h6> 
        <table {...getTableProps()} style={{ border: 'none', width: '1420px', height:'250px'}}>
          <thead>
          {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                    <th
                        {...column.getHeaderProps()}
                        style={{color: '#616161', fontSize: '14px', backgroundColor: 'white'}}
                    >
                      {column.render('Header')}
                    </th>
                ))}
              </tr>
          ))}
          </thead>
          <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                        <td
                            {...cell.getCellProps()}
                            style={{
                              padding: '10px',
                              border: 'none',
                              backgroundColor: '#FAFDFF',
                              color: 'black'
                            }}
                        >
                          {cell.render('Cell')}
                        </td>
                    )
                  })}
                </tr>
            )
          })}
          </tbody>
        </table>
      </div>
  );     
    
}  

export default Pending_Table;  
