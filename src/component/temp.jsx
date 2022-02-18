return (
    <>
        <div className="App">
            <form autoComplete='off' className='form-group' onSubmit={handlesubmit}>
                <label>Name: </label>
                <input type="text" className='form-control' onChange={(event) => setName(event.target.value)} value={name} /><br />
                <label>Age: </label>
                <input type="number" className='form-control' onChange={(event) => setAge(event.target.value)} value={age} /><br />
                <label>Address: </label>
                <input type="text" className='form-control' onChange={(event) => setAddress(event.target.value)} value={address} /><br />
                <label>city: </label>
                <input type="text" className='form-control' onChange={(event) => setCity(event.target.value)} value={city} /><br />
                <label>Pincode: </label>
                <input type="number" className='form-control' onChange={(event) => setPincode(event.target.value)} value={pincode} /><br />
                <label>Email: </label>
                <input type="email" className='form-control' onChange={(event) => setEmail(event.target.value)} value={email} /><br />
                <label>Mobile: </label>
                <input type="number" className='form-control' onChange={(event) => setMobile(event.target.value)} value={mobile} /><br />
                <label>Message</label><br />
                <textarea name="message" className='form-control' onChange={(event) => setMessage(event.target.value)} value={message} /> <br />
                <label>Active: </label>
                <input type="text" className='form-control' onChange={(event) => setActive(event.target.value)} value={active} /><br />
                <input type="submit" className='btn btn-success btn-md' />
                {/* <input type="reset" className='btn btn-danger btn-md'/> */}

                {/* <textarea row="5" cols="20"/> */}

            </form>
        </div>
        <hr />
         {
            forms.length > 0 &&
            <>
                <hr />
                <div className='table-responsive'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>View</th>
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <View forms={forms} deleteforms={deleteforms} />
                        </tbody>
                    </table>
                </div>
            </>
        }
   
        
    </>)