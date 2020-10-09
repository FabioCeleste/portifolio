import styled from 'styled-components';

export const Container = styled.div`
    background-color: #686D76;
    width: 100vw;
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h1`
    color: white;
    margin-left: 64px;
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
    color: white;
    cursor: pointer;
`;
