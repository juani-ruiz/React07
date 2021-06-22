import React from 'react'
import { Button, Icon, Menu } from 'semantic-ui-react'

function hacerClick(){
    console.log("Hiciste click!!!!!")
}

const Nav = () => (

    <Menu>
        <Menu.Menu position='right'>
        
            <Button basic color='green' floated='right' onClick={hacerClick}>
                            <Icon color='green' name='cart' />
            </Button>

        </Menu.Menu>
    </Menu>
  
)

export default Nav