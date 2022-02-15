import axios from 'axios'
import { useEffect, useState } from 'react'

function Call() {
  let [testWord, setTestWord] = useState('')

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://api.datamuse.com/words',
      params: {
        // get synonym
        rel_syn: 'test',
        // get metadata for word frequency
        md: 'f',
      },
    }).then((res) => {
      // setTestWord(res.data[0])
      setTestWord(res.data[0].word)
    })
  }, [testWord])

  return (
    <>
      <p>This is the synonym being returned from our call component: {testWord}</p>
    </>
  )
}

export default Call
