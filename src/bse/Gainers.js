import { data } from 'jquery'
import React, { useEffect, useState } from 'react'

const Trending = () => {
    const [dataa, setData] = useState([])
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)
    const getdata = async () => {


        try {
            const res = await fetch('/bsegainers', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await res.json();



            if (res.status === 201) {
                // window.alert("Done")
                // console.log(data['data']);
                setData(data['data'])
                setShow(true)
            } else {
                window.alert("Something went wrong")
            }
        } catch (error) {
            setErr(true)
        }
    }


    useEffect(() => {

        getdata()
        if (err) getdata()
    }, [])
    return (
        <div>
            <h1>Top Gainers - BSE</h1>
            <br />
            {show ?
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Company Name</th>
                            <th scope="col">High</th>
                            <th scope="col">Low</th>
                            <th scope="col">Change</th>
                            <th scope="col">Gain(%)</th>
                            <th scope="col">Close Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataa.map(p => {
                            return (
                                <tr key={p.company}>
                                    <th scope="row">{p.company}</th>
                                    <td>{p.High}</td>
                                    <td>{p.Low}</td>
                                    <td>{p.Change}</td>

                                    <td style={{ color: '#2ecf29' }}><b>{p.Gain_in_per}</b></td>

                                    <td>{p.close_price}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
                :

                // <h3 style={{ padding: '200px' }}>Loading Please wait...</h3>
                <div class="d-flex justify-content-center m-5 text-primary">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            }

        </div>
    )
}

export default Trending
