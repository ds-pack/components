import { useState } from 'react'
import { Box, Text, Banner, Checkbox } from '@ds-pack/components-experimental'

export default function App() {
  let [checked, setChecked] = useState(false)
  return (
    <Box m="4">
      <Banner variant="success">Testing!</Banner>
      <Text>Hello, World!</Text>
      <Checkbox
        checked={checked}
        onChange={(c) => {
          console.log('Calling onChange!!')
          setChecked(c)
        }}
      >
        Checkbox!
      </Checkbox>
      <Checkbox
        indeterminate
        checked={checked}
        onChange={(c) => {
          console.log('Calling onChange!!')
          setChecked(c)
        }}
      >
        Checkbox!
      </Checkbox>
      <Checkbox
        disabled
        checked={checked}
        onChange={(c) => {
          console.log('Calling onChange!!')
          setChecked(c)
        }}
      >
        Checkbox!
      </Checkbox>
      <Checkbox
        disabled
        indeterminate
        checked={checked}
        onChange={(c) => {
          console.log('Calling onChange!!')
          setChecked(c)
        }}
      >
        Checkbox!
      </Checkbox>
    </Box>
  )
}
