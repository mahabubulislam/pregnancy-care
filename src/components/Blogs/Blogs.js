import React from 'react';

const Blogs = () => {
    return (
        <div className=' w-4/5 mx-auto my-24'>
            <div className='my-5'>
                <h3 className='text-xl font-bold'>Question-1: Difference between authorization and authentication</h3>
                <p> <span className='font-bold'>Answer:</span> </p>
                <table className="border-collapse border border-slate-400 table-fixed">
                    <caption className='table-caption'>Difference between Authorization and Authentication</caption>
                    <thead>
                        <tr>
                            <th className="border border-slate-300 ...">Authorization</th>
                            <th className="border border-slate-300 ...">Authentication</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-slate-300 ...">Authentication verify a user's identity. </td>
                            <td className="border border-slate-300 ...">Authorization grants user to permission to access a resource.</td>

                        </tr>
                        <tr>
                            <td className="border border-slate-300 ...">Authentication needs for authorization</td>
                            <td className="border border-slate-300 ...">After authentication, user can access resource</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='my-5'>
                <h3 className='text-xl font-bold'>Question-2: Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p> <span className='font-bold'>Answer:</span> I use firebase for authentication in my website. Firebase provide login and singup method . It is easy to use. We can use Parse, AWS Amplify, Native Script , Back4App instead of firebase. These are alternative of firebase </p>
                
            </div>
            <div className='my-5'>
                <h3 className='text-xl font-bold'>Question-3:What other services does firebase provide other than authentication</h3>
                <p> <span className='font-bold'>Answer:</span> Firebase provides not only authentication. It also provides hosting, realtime database, storage, analytics etc.</p>
            </div>
        </div>
    );
};

export default Blogs;