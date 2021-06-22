import React, { useState } from 'react'
import './Count.css';
import { Button } from 'semantic-ui-react'


function Count() {

    const [data, setData] = useState(0);
    console.log(data);
    //Suma y resta
    const addButton = () => {
        setData(data + 1)
    }

    const delButton = () => {
        setData( data - 1)    
           
    }       
        
    if (data >= 5 || data <= 0) {
        console.log("deshabilita!!!")

        } 
       
    return (
        <div>
            <div className="Count">
                    <h3>Contador:</h3>
                    <p>{data}</p>
                                    
                </div>

                <div className="btn-contador">

                    <Button inverted id="btnMenos" color='red' onClick={delButton}
                    >
                        -
                    </Button>

                    <Button inverted id="btnMas" color='green' onClick={addButton}>
                        +
                    </Button>                    
                    
                </div>
            
        </div>
    )
}

export default Count


