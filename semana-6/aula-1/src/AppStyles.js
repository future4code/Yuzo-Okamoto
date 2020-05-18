import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    margin: 0 auto;
    padding: 2rem 4rem;
    display: flex;
    flex-direction: column;
`

const Main = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    > header {
        color: white;
        height: 15vh;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        > div > h1 {
            font-size: 150%;
        }
        > ul {
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: center;
            > li {
                color: white;
                font-weight: bold;
                font-style: italic;
                margin: 0 2rem;
                cursor: pointer;
                padding: .5rem 1rem;
                transition: all .5s ease; 
            }
            > li.active {
                text-shadow: 0 1px 0 lightgray;
                text-decoration: underline;
            }
            > li:hover {
                text-decoration: underline;
            }
        }
    }
    > section {
        flex: 1;
        display: flex;
        justify-content: center;
        padding: 1rem 2rem;
        > div {
            flex: 1;
            max-width: 600px;
            display: flex;
            flex-direction: column;
            > div {
                margin-bottom: 2rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                > div {
                    width: 50%;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    > label {
                        font-weight: bold;
                        color: rgba(255,255,255,.8);
                        margin-bottom: .25rem;
                    }
                    > input, select {
                        height: 3rem;
                        border-radius: 6px;
                        border: none;
                        padding-left: 1rem;
                    }
                }
            }
            button {
                color: #333;
                font-size: 80%;
                width: 40%;
                height: 2.5rem;
                margin-left: auto;
                border-radius: 6px;
                border: none;
                font-weight: bold;
                cursor: pointer;
                transition: all .2s ease;
            }
            button:hover {
                color: #fff;
                background: #666;
            }
        }
    }
    #fim {
        display: flex;
        align-items: center;
        p {
            margin-top: 7rem;
            color: white;
            font-weight: bold;
            font-size: 200%;
            text-align: center;
        }
    }
`

const Footer = styled.footer`
    height: 3vh;
    display: flex;
    align-items: center;
    color: white;
    font-style: italic;
`

export { AppContainer, Main, Footer }