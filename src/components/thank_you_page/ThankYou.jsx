import style from './style_thank_you.module.scss'
import image_thankYou from '../../../public/icon-thank-you.svg'
import Steppes from '../steppes/Stepps'

const ThankYou = () => {
    const steppes = 4;
    
    return(
        <div className='global_container'>
            <div className="block_steppes_mobile">
                <Steppes steppes={steppes}/>
            </div>
            <div className='block_global_info'>
                <div className='block_stepper_pc'>
                    <Steppes steppes={steppes}/>
                </div>
                <div className={style.container}>
                    <div className={style.local_container}>
                        <img src={image_thankYou} alt="" />
                        <h1>Thank you!</h1>
                        <p>Thanks for confirming your subscription! We hope you have fun using our platform.
                            If you ever need support, please feel free to email us at support@loremgaming.com.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThankYou