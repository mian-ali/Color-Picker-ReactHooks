import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const Colors=()=>{

    const [colorsName]=React.useState(['#4b6584','#fc5c65','#a5b1c2','#fd9644','#8854d0','#fed330','#8854d0','#26de81','#2d98da','#778ca3','#a55eea','#d1d8e0','#4b7bec','#45aaf2','#0fb9b1','#20bf6b']);

    const CopyColor=(e)=>{
        let color= e.target.innerText;

        if(navigator.clipboard){
            navigator.clipboard.writeText(color);
            navigator.clipboard.readText();

            toast.success(`You have Copied ${color} value Successfully`,{
                position: toast.POSITION.TOP_RIGHT
            })

        }
        

    }
    return(
        <div className="row">
            {colorsName.map(color=>(
                <div className="item"  style={{background:color,}} onClick={CopyColor}>
                    <div>{color}</div>
                </div>
            ))}
        </div>

    )

}
export default Colors