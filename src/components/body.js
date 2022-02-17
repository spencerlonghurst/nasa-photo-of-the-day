import React from "react";
import styled from 'styled-components';


const StyledPhoto = styled.div `
    img {
        border: 4px solid;
        border-color: ${prop => prop.theme.color};
    }
    color: ${prop => prop.theme.color};
`
const StyledTitle = styled.h1 `
    padding-top: 2%;
    margin-bottom: 1%;
`
const DateP = styled.p `
    font-size: 1.4rem;
    font-weight: 600;
`
const StyledImg = styled.img `
    width: 55%;
`

const ExplanationP = styled.p `
    margin-top: 5%;
    border: 4px solid white;
    padding: 2%;
    font-weight: 800;
`

const NasaPhoto = props => {
return (
    <StyledPhoto>
        <StyledTitle>{props.photo.title}</StyledTitle>
        <DateP>Date: {props.photo.date}</DateP>
        <StyledImg src = {props.photo.url} alt = 'The daily NASA img'/>
        <ExplanationP>{props.photo.explanation}</ExplanationP>
    </StyledPhoto>
)
}

export default NasaPhoto;