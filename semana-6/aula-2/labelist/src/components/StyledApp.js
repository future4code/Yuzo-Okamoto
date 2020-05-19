import styled from 'styled-components';

const StyledApp = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Section = styled.section`
    width: 100%;
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    > * {
        flex: 1;
    }
`

const Header = styled.header`
    width: 100%;
    height: 8vh;
`

const Main = styled.main`
    flex: 1;
    width: 100%;
    ${Container} {
        padding: 2rem;
        flex-direction: column;
        justify-content: flex-start;
    }
    section {
        
    }
    li {
        cursor: pointer;
    }
    .task-done {
        text-decoration: line-through;
    }
`

const Footer = styled.footer`
    width: 100%;
    height: 8vh;
`

export { StyledApp, Header, Main, Section, Footer, Container };