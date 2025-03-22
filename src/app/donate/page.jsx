import React from 'react'

function page() {
    return (
        <>
            <section className='d py-5'>
                <div className="container">
                    <h2 className='text-center text-white'>Donate</h2>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h5 className='py-4'>Bank details for donation :</h5>
                            <table border="1" width="800px" cellSpacing="0" cellPadding="15px">
                                <tr className='border-bottom'>
                                    <td width='320px' height="20px">Bank Name:</td>
                                    <td></td>
                                    <td>Nepal Investment Bank Limited</td>
                                </tr>
                                <tr className='border-bottom'>
                                    <td className=''> Account Name:	</td>
                                    <td></td>
                                    <td>SAATHI - 2
                                    </td>
                                </tr>
                                <tr className='border-bottom'>
                                    <td> Account Number	</td>
                                    <td></td>
                                    <td>01701030034159</td>
                                </tr>
                                <tr className='border-bottom'>
                                    <td> Account Type</td>
                                    <td></td>
                                    <td>Current Account</td>
                                </tr>
                                <tr className='border-bottom'>
                                    <td>Branch</td>
                                    <td></td>
                                    <td>Kalimati, Kathmandu, Nepal</td> 
                                </tr>
                                  
                                <tr className='border-bottom'>
                                    <td>SWIFT CODE	</td>
                                    <td></td>
                                    <td>NIBLNPKT</td> 
                                </tr>
                            </table>
                        </div>
                        <div className="col-lg-4">
                            <h3 className='py-4'>Activities</h3>
                            <div className='d-flex'>
                                <div>
                                    <img className='b' src="https://saathi.org.np/wp-content/uploads/2025/02/IMG-20250217-WA0006-533x400.jpg" alt="" />
                                </div>
                                <div>
                                    <h6>GBV Monitoring Meeting with Local Government Focuses on 2024 Achievements and Future Plans</h6>
                                    <p>February 21, 2025</p>
                                </div>
                            </div>
                            <div className='d-flex gap-4 py-3'>
                                <div>
                                    <img className='b' src="https://saathi.org.np/wp-content/uploads/2025/02/20250130_131130_1600x900-600x338.jpg" alt="" />
                                </div>
                                <div>
                                    <h6 className=''>Saathi Members Trained to Combat TFGBV and OCSE</h6>
                                    <p>February 21, 2025</p>
                                </div>
                            </div>
                            <div className='d-flex gap-4 py-4'>
                                <div>
                                    <img className='b' src="https://saathi.org.np/wp-content/uploads/2025/01/1736248672972_1600x720-600x270.jpg" alt="" />
                                </div>
                                <div>
                                    <h6>Saathi Celebrates Christmas and New Year</h6>
                                    <p>February 21, 2025</p>
                                </div>
                            </div>
                            <div className='d-flex gap-4 py-4'>
                                <div>
                                    <img className='b' src="https://saathi.org.np/wp-content/uploads/2025/01/1736248153822-600x336.jpg" alt="" />
                                </div>
                                <div>
                                    <h6>A Holistic Approach to Personal and Career Development</h6>
                                    <p>January 10, 2025</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default page
