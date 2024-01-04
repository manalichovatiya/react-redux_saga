import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_USER_PROCESS, GET_USER_PROCESS, POST_USER_PROCESS, PUT_USER_PROCESS } from './user/action/action';

const Data = () => {
    const title = useRef()
    const author = useRef()
    const all_Data = useSelector((state) => state.user_reducer);
    const dispatch = useDispatch()
    const [index, setindex] = useState()
    const [view, setview] = useState({})

    useEffect(() => {
        dispatch({ type: GET_USER_PROCESS })
    }, [])

    const handleSubmit = () => {
        const input = {
            title: title.current.value,
            author: author.current.value
        }
        dispatch({ type: POST_USER_PROCESS, payload: input })
    }
    const handleDelete = (index) => {
        const data = all_Data.user_data[index]
        dispatch({ type: DELETE_USER_PROCESS, payload: data, index })
    }
    const handleUpdate = (val, ind) => {
        setview(val)
        setindex(ind)
    }
    const handleput = (e) => {
        setview({ ...view, [e.target.name]: e.target.value })
    }
    const handleSave = (action) => {
        dispatch({ type: PUT_USER_PROCESS, payload: view, index })
    }
    return (
        <>
            <div>
                <input name="title" ref={title} className="form-control" placeholder='Enter the title' />
                <input name="author" ref={author} className="form-control mt-2" placeholder='Enter the author' />
                <button onClick={handleSubmit} className="btn btn-primary mt-2 md-3">Submit</button>
            </div>
            <div>
                <input name="title" value={view.title} className="form-control" onChange={(e) => handleput(e)} />
                <input name="author" value={view.author} className="form-control mt-2" onChange={(e) => handleput(e)}/>
                <button onClick={handleSave} className="btn btn-primary mt-2 md-3">Save</button>
            </div>
            <div className="row">
                {all_Data.user_data?.map((val, ind) => (
                    <div className="card ml-2 mt-3 " key={val.id} style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">{val.id}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{val.title}</h6>
                            <p className="card-text">{val.author}</p>
                            <button className="btn btn-primary" onClick={() => handleDelete(ind)}>Delete</button>
                            <button className="btn btn-primary ml-3" onClick={() => handleUpdate(val, ind)}>Update</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Data