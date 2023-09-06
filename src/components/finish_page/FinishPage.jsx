import { useEffect, useState } from 'react'
import { UserGetInfo } from '../servers/getData'
import { Link } from 'react-router-dom'

import style from './style_finish.module.scss'
import '../../index.scss'
import Steppes from '../steppes/Stepps'

const FinishPage = ({ state }) => {
    const [planUser, setPlanUser] = useState({})
    const [other, setOther] = useState([])

    const steppes = 4;

    useEffect(() => {
        const getData = async () => {
            const data = await UserGetInfo.getPlan()
            setPlanUser(data)
        }

        const getOther = async () => {
            const data = await UserGetInfo.getOther()
            setOther(data)
        }

        getData()
        getOther()
    }, [])

    const totalPrice = other.reduce((sum, obj) => sum + obj.price, 0) + planUser.price;
    const totalPriceYearly = other.reduce((sum, obj) => sum + obj.price_yearly, 0) + planUser.price_yearly;

  return (
    <div className='global_container'>
        <div className="block_steppes_mobile">
            <Steppes steppes={steppes}/>
        </div>
        <div className='block_global_info'>
            <div className='block_stepper_pc'>
                <Steppes steppes={steppes}/>
            </div>
            <div className={style.container}>
                <div className={style.block_info}>
                    <div className={style.header}>
                        <p>Finishing up</p>
                        <span>Double-check everything looks OK before confirming.</span>
                    </div>

                    <div className={style.block_cost_total}>
                        <div className={style.container_inform}>
                            <div className={style.price_plan_block}>
                                <div className={style.block_button_plan}>
                                    <p className={style.name_plan}>
                                        {planUser.name} {state ? <>(Monthly)</> : <>(Yearly)</>}
                                    </p>
                                    <button className={style.button_change}>Change</button>
                                </div>
                                {state 
                                ? <p className={style.price_plan}>${planUser.price}/mo</p> 
                                : <p className={style.price_plan}>${planUser.price_yearly}/yr</p>}
                            </div>
                            <div className={style.liner}></div>
                            {other.map(data => (
                                <div className={style.other_container} key={data.id}>
                                    <p>{data.name}</p>
                                    {state 
                                    ? <span>+${data.price}/mo</span> 
                                    : <span>+${data.price_yearly}/yr</span>}
                                </div>
                            ))}
                        </div>

                        <div className={style.total_container}>
                            <p className={style.total_per}>Total (per {state ? <>month</> : <>year</>})</p>
                            {state 
                            ? <p className={style.total_price}>${totalPrice}/mo</p> 
                            : <p className={style.total_price}>${totalPriceYearly}/yr</p>
                            }
                        </div>
                    </div>

                    <div className={style.container_button}>
                        <Link className={style.button_back} to={'/other'}>Go Back</Link>
                        <Link className={style.button_confirm} to={'/success'}>Confirm</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className={style.container_button_mobile}>
            <Link className={style.button_back} to={'/other'}>Go Back</Link>
            <Link className={style.button_confirm} to={'/success'}>Confirm</Link>
        </div>
    </div>
  )
}

export default FinishPage