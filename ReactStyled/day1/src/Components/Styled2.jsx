import React from 'react'
import styled from 'styled-components'
import { MyButton, PrimaryButton ,BigButton } from './Styled1.style'

export default function Styled2() {
  return (
    <div>
        <br />
            <MyButton primary={false}>
            Click Here
            </MyButton>
            <MyButton as="li" primary={true}>
            ass props
            </MyButton>
            <MyButton as="a" href="https://masaischool.com" primary={true}>
            Check Now
            </MyButton>
            <br />



            <BigButton>
            Extend Property
            </BigButton>





                <br />

                reusable button using props 
            <PrimaryButton danger>
            Primary Button
            </PrimaryButton>
            <PrimaryButton warning>
            Default Button
            </PrimaryButton>
            <PrimaryButton success>
            Daced Button
            </PrimaryButton>



        

    </div>
  )
}
