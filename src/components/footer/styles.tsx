import styled from 'styled-components'

export const Wrapper = styled.footer`
width:100%;
height:520px;
background:linear-gradient(black,#1C1B1B);
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`

export const WebName = styled.h1`
font-size:45px;
font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
color:#515151;
`

export const FlexCotainer = styled.div`
width:500px;
margin-top:40px;
display:flex;
justify-content:space-between;
`

export const Ul = styled.ul`
font-size:14px;
line-height:30px;
`

export const Li = styled.li`
color:gray;
&:first-of-type{
    color:white;
    text-transform:uppercase;
    font-weight:700;
    font-size:20px;
}
`

export const DetailDescription = styled.p`
color:#C5C5C5;
font-size:15px;
margin-top:50px;
&:last-of-type{
    text-decoration:underline;
    margin-top:30px;
}
`