import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Classnames from 'classnames'
import Inputs from '../components/Inputs'
import { Registration } from '../redux/actions/authActions'



function Cahier() {

    const [form, setForm] = useState({})
    const dispatch = useDispatch()
    const errors = useSelector(state => state.errors)
    const navigate = useNavigate()


    const onChangeHandler = (e) => {
        setForm({
            ...form, // current state 
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault(); // bech l parametre ma yothhorch fil URL 
        dispatch(Registration(form, navigate))
    }
    return (
        <div>

            <div className="container p-4 mt-4">
                <div className="row justify-content-evenly mt-4">
                    <div className="col-lg-6 col-md-12 mt-4">
                        <form onSubmit={onSubmit}>
                            <div className="d-flex">
                                <i class="fa-solid fa-book fs-1 mx-2 "></i> <h2>Remplir votre Dossier de Demande de SFP</h2>
                            </div>

                            <table>
                                <th>
                                    <Inputs name="name" label="Name" type="text" onChangeHandler={onChangeHandler} errors={errors.name} />
                                    <Inputs name="email" label="Email" type="text" onChangeHandler={onChangeHandler} errors={errors.email} />
                            
                                    <div className=" mb-3">
                                        <label className="form-label">Address</label>
                                        <div className="input-group">
                                            <textarea
                                                type="text"
                                                className={Classnames("form-control", { "is-invalid": errors.address })}
                                                name="address"
                                                onChange={onChangeHandler}
                                                value={form && form.address ? form.address : ""}
                                            ></textarea>
                                            {
                                                errors.address && (<div className="invalid-feedback">
                                                    {errors.address}
                                                </div>)
                                            }
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button type="submit" className="btn btn-outline-primary">Save <i className="fa-solid fa-floppy-disk"></i></button>
                                    </div>


                                </th>
                                {/* ----------------------- cas de binome ------------------ */}
                                <th>
                                    <Inputs name="name" label="Name" type="text" onChangeHandler={onChangeHandler} errors={errors.name} />
                                    <Inputs name="email" label="Email" type="text" onChangeHandler={onChangeHandler} errors={errors.email} />
                                    
                                    <div className=" mb-3">
                                        <label className="form-label">Address</label>
                                        <div className="input-group">
                                            <textarea
                                                type="text"
                                                className={Classnames("form-control", { "is-invalid": errors.address })}
                                                name="address"
                                                onChange={onChangeHandler}
                                                value={form && form.address ? form.address : ""}
                                            ></textarea>
                                            {
                                                errors.address && (<div className="invalid-feedback">
                                                    {errors.address}
                                                </div>)
                                            }
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <Link to="/login">I have account</Link>
                                    </div>
                                </th>
                            </table>
                        </form>
                    </div>

                </div>

            </div>

        </div>


    )
}

export default Cahier