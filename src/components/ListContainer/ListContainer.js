import React, { useEffect, useState} from 'react';
import ListDetail from '../ListDetail/ListDetail';

import './ListContainer.css';


const ListContainer = ()  => {
        
    const [productos, setProductos] = useState([])

    useEffect(() => {

        const prom= new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {id:1, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_871565-MLA45740759361_042021-O.webp", title:"Venzo FX7", price:"80000", description:"Cuadro Fx7 naranja talle S"},
                    {id:2, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_790802-MLA41258952373_032020-O.webp", title:"Zenith BMX", price:"10000", description:"Cuadro Zenith naranja talle L"},
                    {id:3, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_847201-MLA32884547437_112019-O.webp", title:"BMX", price:"10000", description:"Cuadro bmx"}
                    

                ])
            }, 2000)

            
    })
    prom.then((resultado) => { setProductos(resultado); })
}, [])

    //console.log('producto: ', productos);

return (
    <div className="list-section">

        { productos.map(data => 

            <ListDetail data={data} />
        
        ) }
    </div>
    

);
}

export default ListContainer