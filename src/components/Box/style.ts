import styled  from 'styled-components';

// theme is now fully typed
export const BoxContainer = styled.div`
    background:  var(--gray-100);

    padding: 3rem 4rem;
    width: 26.5rem;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;