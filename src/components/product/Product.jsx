import { useGetUserQuery } from '../../redux/api/productsApi';

import { Card } from 'antd';
import { Link } from 'react-router-dom';



const { Meta } = Card;

const Product = () => {

    const { data } = useGetUserQuery();
    
 

    console.log(data);


    return (
        <>
            <div className='my-10 w-[1200px] m-auto'>
                
                    <div className='flex flex-wrap gap-10 '>
                        {data?.data.map((user) => (
                            <Card className='shadow-2xl p-4'
                                key={user.id}
                                style={{ width:260, height:350}}
                                cover={<img className='h-[200px] object-cover  shadow-md ' alt={`${user.first_name} ${user.last_name}`} src={user.avatar} />}
                            >
                                <Meta title={`${user.first_name} ${user.last_name}`} description={user.email} className='mb-4' />
                                
                                <Link to={`/users/${user.id}`} className=' text-blue-900 font-bold shadow-2xl py-2.5 px-4  rounded  bg-slate-400'>
                                    Details
                                </Link>
                                <button className='bg-purple-400 text-white font-bold py-2 px-4 rounded ml-3  mt-4' onClick={() => document.getElementById('my_modal_1').showModal()}>Delete</button>

                            </Card>
                        ))}
                    </div>
            
            </div>
        </>
    )
}

export default Product