import { useEffect, useState } from 'react'

function Input() {
  const [formData, setFormData] = useState('')

  useEffect(() => {}, [formData])

  function handleChange(e) {
    console.log(e.target.value)
    setFormData(e.target.value)
  }

  function handleSubmit(e) {
    // console.log(e.length())
    e.preventDefault()
    // console.log(formData.length)
    if (formData.length >= 1) {
      console.log('that value is greater than one')
    } else {
      console.log('that value is less than one')
    }
  }
  return (
    <>
      <form>
        <input type="text" onChange={handleChange}></input>
        <button type="submit" onClick={handleSubmit}>
          Make me sound smart
        </button>
      </form>
    </>
  )
}

export default Input
