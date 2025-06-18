import Styles from '../CarSelector.module.css';
import {type CarData, CarDataHandler} from "../../Data/CarData.ts";

interface Props{
    handler: CarDataHandler;
    OnClick: (carID: number) => void;
}

function CarSelector({handler,OnClick}: Props)
{
    return <footer className={Styles['carMenu']}>
        {handler.data.map((data : CarData) => (
            <button key={data.id} className={Styles['carButton']} onClick={()=>OnClick(data.id)}>
                {data.name}
            </button>
        ))}
        </footer>

}

export default CarSelector;