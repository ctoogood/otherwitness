import React from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
height:auto;
width:100%;
color:#707070;
margin:0;
padding-bottom:2rem;


    p {
        padding:2rem;
        text-align:center;
        margin-bottom:0;
        color:#707070;

    }

    a {
        color:white;
    }

    h3 {
        font:2rem Raleway;
        font-weight:normal;
        text-align:center;
        padding-top:1rem;
        color:#707070;
    }

    form {
        margin-bottom:0;
        p {
            margin:0.5rem;
            padding:0;
            margin-bottom:0;
            
        }

        button {
            padding: .1rem 1rem;
            margin-top: 1rem;
            color:white;
            border:1px solid white;
            background-color: #AC6D6D;
            text-decoration: none;
            font-size: 1rem;
            cursor: pointer;
            text-align: center;
            box-shadow: 0px 2px 2px rgba(0,0,0,0.1);
            font-family:montserrat;
            margin-bottom:1rem;
            transition:all 0.3s ease-in-out;
            border-radius:20px;
              
    


            &:hover {
                color:#707070;
                border: 1px solid #9baeb4;
                background:white;

            }
        }


        input {
            border-radius:20px;
            width:100%;

        }

        .emailInput {
            position:relative;
            max-width:400px;
            margin:auto;
        }
    }
`

const Email = () => (
    <FormContainer >
        <h3>Subscribe to Receive the Latest Posts</h3>
        <form name="contact" method="POST" data-netlify="true" action="/formSuccess">
            <input type="hidden" name="form-name" value="contact"  />
            <p>
                <label>
                    <div className="emailInput">
                    <input type="email" name="email" placeholder=" Your Email" />
                    <button type="submit">Subscribe</button>
                    </div>
                </label>
            </p>
            <p>
                
            </p>
        </form>
    </FormContainer>
  )
  
  export default Email