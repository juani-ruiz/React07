import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const ItemDetail = ({data}) => (
  <Card>
    <Image src={data.pictureUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.title}</Card.Header>
      <Card.Meta>
        <span className='date'>{data.date}</span>
      </Card.Meta>
      <Card.Description>
      $ :{ data.price }
      </Card.Description>
     
      <Card.Description>
        {data.description}
      </Card.Description>
    </Card.Content>
   
  </Card>
)

export default ItemDetail