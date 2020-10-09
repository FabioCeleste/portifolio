import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 64px;
    background-color: #373A40;
    width: 100vw;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Links = styled.div`
    display: flex;
    margin-right: 64px;

    > a + a {
        margin-left: 16px;
        padding-left: 16px;
        border-left: 1px solid #888888;
    }
`;

export const Item = styled.a`
    display: flex;
    margin-right: 64px;
    color: white;
    cursor: pointer;
`;
