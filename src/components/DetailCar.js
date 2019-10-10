import React from 'react'
import styled from 'styled-components'

const Head = styled.div`
    text-align: center;
    margin-top: 30px;
`
const CardCar = styled.img`
    width: 400px;
    height: auto;
`
const Description = styled.p`
    width: 400px;
    text-align: justify;
    margin-left: auto;
    margin-right: auto;
`

export default ({text,imageFile,description}) => (
    <Head>
        <h1>{text}</h1>
        <CardCar src={imageFile} alt="imageCar"/>
        <Description>
            {description}
        </Description>
    </Head>
)