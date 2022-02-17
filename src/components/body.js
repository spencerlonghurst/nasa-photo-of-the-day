import React from "react";
import styled from 'styled-components';


const StyledPhoto = styled.div `
    img {
        border: 4px solid white;
    }
`
const ExplanationP = styled.p `
    margin: 20px;
`







const NasaPhoto = props => {
return (
    <StyledPhoto>
        <h2>{props.photo.title}</h2>
        <img src = {props.photo.url} alt = 'The daily NASA img'/>
        <ExplanationP>{props.photo.explanation}</ExplanationP>
        <p>Date: {props.photo.date}</p>
    </StyledPhoto>
)
}

export default NasaPhoto;