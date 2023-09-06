import { Link } from 'react-router-dom'
import { Checkbox } from '@mui/material'
import { add } from '../data/add_ons'
import { useState } from 'react'
import { UserData } from '../servers/posts_user'
import Steppes from '../steppes/Stepps'

import '../../index.scss'
import style from './style_addons.module.scss'

const AddOns = ({ state }) => {
  const addOne = add[0]
  const addTwo = add[1]
  const addThree = add[2]
  
  const steppes = 3;

  const [one, setOne] = useState(true)
  const [globalOne, setGlobalOne] = useState(true)

  const [two, setTwo] = useState(true)
  const [globalTwo, setGlobalTwo] = useState(true)

  const [three, setThree] = useState(true)
  const [globalThree, setGlobalThree] = useState(true)


  const setCheckBoxOne = () => {
    setGlobalOne(!globalOne)
    setOne(!one)

    const data = {
      id: 1,
      name: addOne.header,
      price: addOne.price,
      price_yearly: addOne.price_yearly
    }
    UserData.addOther(data)
  }
  const setCancelCheckBoxOne = () => {
    setGlobalOne(!globalOne)
    setOne(!one)

    const id = 1
    UserData.cancelOther(id)
  }

  const setCheckBoxTwo = () => {
    setGlobalTwo(!globalTwo)
    setTwo(!two)

    const data = {
      id: 2,
      name: addTwo.header,
      price: addTwo.price,
      price_yearly: addTwo.price_yearly
    }
    UserData.addOther(data)
  }
  const setCancelCheckBoxTwo = () => {
    setGlobalTwo(!globalTwo)
    setTwo(!two)

    const id = 2
    UserData.cancelOther(id)
  }

  const setCheckBoxThree = () => {
    setGlobalThree(!globalThree)
    setThree(!three)

    const data = {
      id: 3,
      name: addThree.header,
      price: addThree.price,
      price_yearly: addThree.price_yearly
    }
    UserData.addOther(data)
  }
  const setCancelCheckBoxThree = () => {
    setGlobalThree(!globalThree)
    setThree(!three)

    const id = 3
    UserData.cancelOther(id)
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
              <p>Pick add-ons</p>
              <span>Add-ons help enhance your gaming experience.</span>
            </div>
            <div className={style.container_checkbox}>
              <div
                className={style.container_variants}
                style={
                  one
                    ? { backgroundColor: '#fff' }
                    : { backgroundColor: '#bad0ec54', borderColor: '#4e3bb6' }
                }>
                <div className={style.global_checkbox_inform}>
                  <Checkbox
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                    onClick={globalOne ? setCheckBoxOne : setCancelCheckBoxOne}
                    color='myColorCheckbox'
                  />
                  <div className={style.inform_variants}>
                    <p>{addOne.header}</p>
                    <span>{addOne.ps}</span>
                  </div>
                </div>

                {state ? (
                  <span className={style.price}>+${addOne.price}/mo</span>
                ) : (
                  <span className={style.price}>+${addOne.price_yearly}/yr</span>
                )}
              </div>

              <div
                className={style.container_variants}
                style={
                  two
                    ? { backgroundColor: '#fff' }
                    : { backgroundColor: '#bad0ec54', borderColor: '#4e3bb6' }
                }>
                <div className={style.global_checkbox_inform}>
                  <Checkbox
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                    onClick={globalTwo ? setCheckBoxTwo : setCancelCheckBoxTwo}
                    color='myColorCheckbox'
                  />
                  <div className={style.inform_variants}>
                    <p>{addTwo.header}</p>
                    <span>{addTwo.ps}</span>
                  </div>
                </div>

                {state ? (
                  <span className={style.price}>+${addTwo.price}/mo</span>
                ) : (
                  <span className={style.price}>+${addTwo.price_yearly}/yr</span>
                )}
              </div>

              <div
                className={style.container_variants}
                style={
                  three
                    ? { backgroundColor: '#fff' }
                    : { backgroundColor: '#bad0ec54', borderColor: '#4e3bb6' }
                }>
                <div className={style.global_checkbox_inform}>
                  <Checkbox
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                    onClick={
                      globalThree ? setCheckBoxThree : setCancelCheckBoxThree
                    }
                    color='myColorCheckbox'
                  />
                  <div className={style.inform_variants}>
                    <p>{addThree.header}</p>
                    <span>{addThree.ps}</span>
                  </div>
                </div>

                {state ? (
                  <span className={style.price}>+${addThree.price}/mo</span>
                ) : (
                  <span className={style.price}>+${addThree.price_yearly}/yr</span>
                )}
              </div>
            </div>

            <div className={style.container_button}>
              <Link className={style.button_back} to={'/plan'}>Go Back</Link>
              <Link className={style.button_next} to={'/total-cost'}>Next Step</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={style.container_button_mobile}>
        <Link className={style.button_back} to={'/plan'}>Go Back</Link>
        <Link className={style.button_next} to={'/total-cost'}>Next Step</Link>
      </div>
    </div>
  )
}

export default AddOns