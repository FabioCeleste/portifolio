import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 64px;

    >div {
        display: flex;
        margin-top: 76px;
        align-self: normal;
        justify-content: space-around;
    }
  
`;

export const Title = styled.h1`
    font-size: 64px;
    font-weight: normal;
`;

export const Item = styled.p`
    font-size: 24px;
    margin-bottom: 10px;
`;
