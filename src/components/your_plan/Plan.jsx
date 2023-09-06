import { useState } from 'react'
import { Switch } from '@mui/material'
import style from './style_plan.module.scss'

import { plan } from '../data/plan'
import { UserData } from '../servers/posts_user'
import { Link } from 'react-router-dom'
import Steppes from '../steppes/Stepps'

import arcade_img from '../../../public/icon-arcade.svg'
import advanced_img from '../../../public/icon-advanced.svg'
import pro_img from '../../../public/icon-pro.svg'

const Plan = ({switchState, setSwitchState, state, setState }) => {
  const Arcade = plan[0]
  const Advanced = plan[1]
  const Pro = plan[2]

  const steppes = 2;

  const [arcade, setArcade] = useState(true)
  const [globalArcade, setGlobalArcade] = useState(true)

  const [advanced, setAdvanced] = useState(true)
  const [globalAdvanced, setGlobalAdvanced] = useState(true)

  const [pro, setPro] = useState(true)
  const [globalPro, setGlobalPro] = useState(true)

  const [disabledOne, setDisabledOne] = useState(true)
  const [disabledTwo, setDisabledTwo] = useState(true)
  const [disabledThree, setDisabledThree] = useState(true)


  const changeState = () => {
    setSwitchState(!switchState)
    setState(!state)
  }

  const changeArcade = () => {
    setGlobalArcade(!globalArcade)
    setDisabledTwo(!disabledTwo)
    setDisabledThree(!disabledThree)
    setArcade(!arcade)
    window.localStorage.setItem('arcade', arcade);

    const data = {
      name: Arcade.name,
      price: Arcade.price,
      price_yearly: Arcade.price_yearly
    }
    UserData.selectPlan(data)
  }
  const changeArcadeCancel = () => {
    setGlobalArcade(!globalArcade)
    setDisabledTwo(!disabledTwo)
    setDisabledThree(!disabledThree)
    setArcade(!arcade)

    const id = 1
    UserData.cancelPlan(id)
  }

  const changeAdvanced = () => {
    setAdvanced(!advanced)
    setDisabledOne(!disabledOne)
    setDisabledThree(!disabledThree)
    setGlobalAdvanced(!globalAdvanced)

    const data = {
      name: Advanced.name,
      price: Advanced.price,
      price_yearly: Advanced.price_yearly
    }
    UserData.selectPlan(data)
  }
  const changeAdvancedCancel = () => {
    setAdvanced(!advanced)
    setDisabledOne(!disabledOne)
    setDisabledThree(!disabledThree)
    setGlobalAdvanced(!globalAdvanced)

    const id = 1
    UserData.cancelPlan(id)
  }

  const changePro = () => {
    setPro(!pro)
    setDisabledOne(!disabledOne)
    setDisabledTwo(!disabledTwo)
    setGlobalPro(!globalPro)

    const data = {
      name: Pro.name,
      price: Pro.price,
      price_yearly: Pro.price_yearly
    }
    UserData.selectPlan(data)
  }
  const changeProCancel = () => {
    setPro(!pro)
    setDisabledOne(!disabledOne)
    setDisabledTwo(!disabledTwo)
    setGlobalPro(!globalPro)

    const id = 1
    UserData.cancelPlan(id)
  }

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
              <p>Select your plan</p>
              <span>You have the option of monthly or yearly billing</span>
            </div>

            <div className={style.container_plan_switch}>
              <div className={style.container_button_plan}>
                <button
                  className={style.button_plan}
                  disabled={disabledOne ? false : true}
                  onClick={globalArcade ? changeArcade : changeArcadeCancel}
                  style={
                    arcade
                      ? { backgroundColor: '#fff' }
                      : { backgroundColor: '#bbcdff57', borderColor: '#3c06ff77' }
                  }>
                  <img src={arcade_img} alt='arcade' />
                  <div>
                    <p>{Arcade.name}</p>
                    {state ? (
                      <span>${Arcade.price}/mo</span>
                    ) : (
                      <>
                        <span>${Arcade.price_yearly}/yr</span>
                        <p className={style.free_month}>2 months free</p>
                      </>
                    )}
                  </div>
                </button>

                <button
                  className={style.button_plan}
                  disabled={disabledTwo ? false : true}
                  onClick={
                    globalAdvanced ? changeAdvanced : changeAdvancedCancel
                  }
                  style={
                    advanced
                      ? { backgroundColor: '#fff' }
                      : { backgroundColor: '#bbcdff57', borderColor: '#3c06ff77' }
                  }>
                  <img src={advanced_img} alt='advanced' />

                  <div>
                    <p>{Advanced.name}</p>
                    {state ? (
                      <span>${Advanced.price}/mo</span>
                    ) : (
                      <>
                        <span>${Advanced.price_yearly}/yr</span>
                        <p className={style.free_month}>2 months free</p>
                      </>
                    )}
                  </div>
                </button>

                <button
                  className={style.button_plan}
                  disabled={disabledThree ? false : true}
                  onClick={globalPro ? changePro : changeProCancel}
                  style={
                    pro
                      ? { backgroundColor: '#fff' }
                      : { backgroundColor: '#bbcdff57', borderColor: '#3c06ff77' }
                  }>
                  <img src={pro_img} alt='pro' />

                  <div>
                    <p>{Pro.name}</p>
                    {state ? 
                      <span>${Pro.price}/mo</span>
                    : 
                      <>
                        <span>${Pro.price_yearly}/yr</span>
                        <p className={style.free_month}>2 months free</p>
                      </>
                    }
                  </div>
                </button>
              </div>

              <div className={style.container_switch}>
                {state ? (
                  <p className={style.active}>Monthly</p>
                ) : (
                  <p className={style.not_active}>Monthly</p>
                )}
                <Switch
                  className={style.switch}
                  onChange={changeState}
                  size='string'
                  color='myColorSwitch'
                  checked={switchState}
                />
                {state ? (
                  <p className={style.not_active}>Yearly</p>
                ) : (
                  <p className={style.active}>Yearly</p>
                )}
              </div>
            </div>

            <div className={style.container_button}>
              <Link className={style.button_back} to={'/'}>
                Go Back
              </Link>
              <Link className={style.button_next} to={'/other'}>
                Next Step
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={style.container_button_mobile}>
        <Link className={style.button_back} to={'/'}>
          Go Back
        </Link>
        <Link className={style.button_next} to={'/other'}>
          Next Step
        </Link>
      </div>
    </div>
  )
}

export default Plan