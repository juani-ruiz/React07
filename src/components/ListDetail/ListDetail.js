import React from 'react'
import { Button, Card, Image, Divider, Icon } from 'semantic-ui-react'

const ListDetail = (props) => (

    

    <Card fluid >     

                    <Card.Content>
                        <Image
                            as='a'               
                            floated='center'
                            size='tiny'
                            src= { props.data.pictureUrl}
                        />
                        <Card.Header>
                            <a href="/">{ props.data.title }</a>
                        </Card.Header>
                        
                        <Card.Header>
                            { props.data.description }    
                        </Card.Header>

                        <Divider clearing />

                        <Card.Header active>
                            $ :{ props.data.price }
                        </Card.Header>

                        <Button basic color='green' floated='right'>
                            <Icon color='green' name='cart' />
                        </Button>
                    </Card.Content>

                </Card>  
)

export default ListDetail