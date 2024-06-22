import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import "./dataTable.scss"
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function DataForTable(props) {


async function deleteFun(deletedUser){

  Swal.fire({
    title:`Are U Sure You Wanna Delete this item : ${deletedUser.row.firstName} ${deletedUser.row.lastName} ?`,
    showCancelButton: true,
  }).then((data)=>{
    if(data.isConfirmed == true){
      let res =  fetch(`http://localhost:9000/users/${deletedUser.id}`,{
        method:"DELETE"
      }).then(
        (res)=>res.json()
      ).then(()=>{
        props.set();
      })
    }
  })

}


   const actionsColumn=
      {
         field:'actions',headerName:'actions',width:200,
         
         renderCell:(params)=>{
          return <div className="action">
             <Link  to={`/${props.slug}/${params.id}`} className="view"><img src="view.svg" alt="" /></Link>
             <button className="delete" onClick={()=>{deleteFun(params)}}><img src="delete.svg" alt="" /></button>
          </div>
          
         }
      }

  return (
    <div className="dataTable">
      <DataGrid className='dataGrid' 
        rows={props.rows}
        columns={[...props.columns,actionsColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
         toolbar:{
            showQuickFilter:true,
            quickFilterProps:{debounceMs:500},
         }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        
        
      />
   </div>
    
  );
}