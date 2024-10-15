import React from 'react'
import { Helmet } from 'react-helmet-async'

const Title = ({ title= "Whispr", description= "this is chat app called Whispr"}) => {
  return <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
}

export default Title
