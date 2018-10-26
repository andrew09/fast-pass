import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 8px;
    font-size: 16px;
    background-color: #f7f7f7;
    border-radius: 5px;
    margin-bottom: 8px;
`;

export const Character = styled.div`
    padding: 1px;
    color: ${({ isSymbol, isNumber }) =>
        isSymbol ? '#F0544F' : isNumber ? '#008EFB' : ''};
`;
