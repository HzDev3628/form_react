import style from './style_steppes.module.scss'
import bg_image from '../../../public/bg-sidebar-desktop.svg'
import bg_image_mobile from '../../../public/bg-sidebar-mobile.svg'

const Steppes = ({ steppes }) => {
  return (
    <div className={style.global_bg_slider}>
      <div className={style.global_container}>
        <div className={style.container_step}>
          <div
            className={style.number_step}
            style={
              steppes === 1 ? { backgroundColor: '#c4f0fd', color: '#000' } : {}
            }>
            1
          </div>
          <div className={style.info_step}>
            <span>STEP 1</span>
            <p>YOUR INFO</p>
          </div>
        </div>

        <div className={style.container_step}>
          <div
            className={style.number_step}
            style={
              steppes === 2 ? { backgroundColor: '#c4f0fd', color: '#000' } : {}
            }>
            2
          </div>
          <div className={style.info_step}>
            <span>STEP 2</span>
            <p>SELECT PLAN</p>
          </div>
        </div>

        <div className={style.container_step}>
          <div
            className={style.number_step}
            style={
              steppes === 3 ? { backgroundColor: '#c4f0fd', color: '#000' } : {}
            }>
            3
          </div>
          <div className={style.info_step}>
            <span>STEP 3</span>
            <p>ADD ONS</p>
          </div>
        </div>

        <div className={style.container_step}>
          <div
            className={style.number_step}
            style={
              steppes === 4 ? { backgroundColor: '#c4f0fd', color: '#000' } : {}
            }>
            4
          </div>
          <div className={style.info_step}>
            <span>STEP 4</span>
            <p>SUMMARY</p>
          </div>
        </div>
      </div>
      <div className={style.global_image_mobile}>
        <img className={style.image_bg_mobile} src={bg_image_mobile} alt="" />
      </div>
      <img className={style.image_bg} src={bg_image} alt='' />
    </div>
  )
}

export default Steppes
