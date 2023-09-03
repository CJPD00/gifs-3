
import { useState } from "react"

export const AddCategory = ({ setCategory }) => {

    const [input, setinput] = useState('')

    const handleSubmit = (e) => {
        
        e.preventDefault()

        if (input.length > 0) setCategory((state) => [input,...state])
        setinput('')
    }

    return (

        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setinput(e.target.value)} />
            </form>

        </>
    )

}

