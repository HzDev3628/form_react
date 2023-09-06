import Forms from "./components/forms/Forms";
import Steppes from "./components/steppes/Stepps";
import './index.scss'


function App() {
  const steppes = 1;

  return (
    <div className='global_container'>
      <div className="block_steppes_mobile">
        <Steppes steppes={steppes}/>
      </div>
      <div className='block_global_info'>
        <div className='block_stepper_pc'>
          <Steppes steppes={steppes}/>
        </div>
        <Forms/>
      </div>
    </div>
  );
};

export default App;