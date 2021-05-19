import styled from 'styled-components'
import { WIDTH } from '../../style'

export const FullWrapper = styled.div`
width:100%;
display:flex;
justify-content:center;
margin-top:90px;
`

export const Wrapper = styled.div`
width:${WIDTH};
display:flex;
justify-content:space-between;
`

export const Container = styled.div`
display:flex;
flex-direction:column;
&:last-of-type{
    align-items:flex-end;
}
`

export const Title = styled.h1`
color:white;
font-size:19px;
color:white;
text-transform:uppercase;
`

export const Description = styled.span`
color:gray;
font-size:14px;
margin-top:10px;
`