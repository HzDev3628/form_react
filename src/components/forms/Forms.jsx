import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { UserData } from '../servers/posts_user'
import style from './style_forms.module.scss'

const Forms = () => {
  const [stateLink, setStateLink] = useState(true)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onChange'
  })

  const createForm = data => {
    UserData.inform(data)
    setStateLink(!stateLink)

    reset()
  }

  return (
    <div className={style.container}>
      <div className={style.block_info}>
        <div className={style.header}>
          <p>Personal info</p>
          <span>Please provide name, email address, and phone number.</span>
        </div>

        <div className={style.form_global} onSubmit={handleSubmit(createForm)}>
          <form className={style.form}>
            <div className={style.block_input_header}>
              <div className={style.error_header}>
                <span>Name</span>
                {errors?.name?.message && <p>This field is required</p>}
              </div>

              <input
                className={style.input}
                {...register('name', { required: 'This field is required' })}
                style={{
                  outlineColor: errors?.name?.message ? 'red' : '#352985',
                  borderColor: errors?.name?.message ? 'red' : '#0000005b'
                }}
                placeholder='e.g. Stephen King'
              />
            </div>

            <div className={style.block_input_header}>
              <div className={style.error_header}>
                <span>Email Address</span>
                {errors?.email?.message && <p>This field is required</p>}
              </div>

              <input
                className={style.input}
                {...register('email', { required: 'This field is required' })}
                style={{
                  outlineColor: errors?.email?.message ? 'red' : '#352985',
                  borderColor: errors?.email?.message ? 'red' : '#0000005b'
                }}
                placeholder='e.g. stephenking@gmail.com'
              />
            </div>

            <div className={style.block_input_header}>
              <div className={style.error_header}>
                <span>Phone Number</span>
                {errors?.phone?.message && <p>This field is required</p>}
              </div>

              <input
                className={style.input}
                {...register('phone', { required: 'This field is required' })}
                style={{
                  outlineColor: errors?.phone?.message ? 'red' : '#352985',
                  borderColor: errors?.phone?.message ? 'red' : '#0000005b'
                }}
                placeholder='e.g. +1 234 567 890'
              />
            </div>

            <div className={style.container_button}>
              <div className={style.block_button}>
                <button className={style.button_submit}>Submit</button>
                <Link className={style.button_link} to={'/plan'}>
                  <button className={style.button_local} disabled={stateLink}>
                    Next Step
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Forms;