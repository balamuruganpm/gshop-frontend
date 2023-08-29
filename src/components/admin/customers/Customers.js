import React, { Fragment,useEffect } from 'react';
import {Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
// import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import {deleteUser, getUsers} from '../../../actions/userActions';
import {MDBDataTable} from 'mdbreact';
import Loader from '../../layouts/Loader';
import {clearError, clearUserDeleted } from '../../../slice/userSlice';




function Customers(props) {
    
    const { users = [], loading = true, error, isUserDeleted }  = useSelector(state => state.userState)

    const dispatch = useDispatch();

    const setUsers = () => {
        const data = {
            columns : [
                {
                    label: 'S.No',
                    field: 'serialno',
                    sort: 'asc'
                },
                {
                    label: 'Customer Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc'
                },
                {
                    label: 'Phone',
                    field: 'phone',
                    sort: 'asc'
                },
                {
                    label: 'Address',
                    field: 'address',
                    sort: 'asc'
                },
                {
                    label: 'Date',
                    field: 'date',
                    sort: 'DD/MM/YYYY'
                },
                {
                    label: 'Action',
                    field: 'actions',
                    sort: 'asc'
                },

            ],
            rows : []
        }

        users.forEach( (user,index) => {
            data.rows.push({
                serialno:<p>{index+1}</p>,
                name: user.name,
                email : user.email,
                phone: user.phone,
                address:user.address,
                date:user.createdAt,
                actions: (
                    <Fragment>
                        {/* <Link to={`/admin/updateuser/${user._id}`} className="btn btn-primary"> <i className="fa fa-pencil"></i></Link> */}
                        <Button onClick={e => deleteHandler(e, user._id)} className="btn btn-danger py-2 mt-2 ml-2" style={{width:"150px", fontSize:"12px"}}>
                           Disable Now
                        </Button>
                    </Fragment>
                )
            })
        })

        return data;
    }

    const deleteHandler = (e, id) => {
        e.target.disabled = true;
        dispatch(deleteUser(id))
    }

    useEffect(() => {
        if(error) {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: 'error',
                onOpen: ()=> { dispatch(clearError()) }
            })
            return
        }
        if(isUserDeleted) {
            toast('User Deleted Succesfully!',{
                type: 'success',
                position: toast.POSITION.BOTTOM_CENTER,
                onOpen: () => dispatch(clearUserDeleted())
            })
            return;
        }

        dispatch(getUsers)
    },[dispatch, error, isUserDeleted])


    return (
       <Fragment>
  
     {loading ? <Loader/> :
   
     <div className='pt-3 admin-container me-0' style={{marginTop:"3rem",marginLeft:"3rem", width:"75%", height:"80vh", display:"block"}}>
     <h1>Customers</h1>  <br/>
     <MDBDataTable
     data={setUsers()}
     bordered
     striped
     responsive  
     hover
     className="py-1 w-100 h-1 mt-2 "
     style={{height:"50vh"}}
     />
    </div>
}
       </Fragment>
    );
}

export default Customers;