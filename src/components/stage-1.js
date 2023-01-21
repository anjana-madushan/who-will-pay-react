import React, {useState, useContext, useRef} from 'react'
import { Button, Form, Alert } from "react-bootstrap"
import { Mybill } from '../context';


const Stage1 = () =>{

    const textInput = useRef();
    const context = useContext(Mybill);
    const [error, setError] = useState([false, ''])

    const handleSubmit = (e) => {
        e.preventDefault();

        const value = textInput.current.value;

        const validate = validateInput(value)

      //  console.log(value)

      if(validate){

        setError([false, ''])
      //  console.log("Add Player")

        context.addPlayer(value)
        textInput.current.value=""

      }


    }

    const validateInput = (value) => {

        if(value===''){
            setError([true, "Sorry you need to add something"])
            return false
        }

        if(value.length <= 2){
            setError([true, "Sorry you need to add 3 characters at least"])
            return false
        }

        return true;
    }


console.log(context.state)

    return(
        <>
        <Form onSubmit={handleSubmit}  className="mt-4">
            <Form.Group>
                <Form.Control
                    type='text'
                    placeholder='Add the palyer'
                    name='player'
                    ref={textInput}
                />
            </Form.Group>

            {error[0] ?

                <Alert>
                    {error[1]}
                </Alert>

            :null
            }

            <Button className='miami' variant='primary' type='submit'>
            Add Player
            </Button>
        </Form>
        </>
    )

}

export default Stage1