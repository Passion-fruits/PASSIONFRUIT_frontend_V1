import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-direction:column;
align-items:flex-end;
width:200px;
margin-top:80px;
`

export const Title = styled.span`
color:white;
font-weight:600;
font-size:15px;
`

export const Refresh = styled.button`
background:rgb(50,50,50);
border:none;
padding: 3px 15px;
border-radius:4px;
color:gray;
margin-top:10px;
i{
    color:gray;
    font-size:13px;
}
`