import { useState } from 'react'
import {
  Box,
  Text,
  Banner,
  Checkbox,
  Stack,
  Blockquote,
  Button,
  Chip,
  Figure,
  GitHubMention,
  Heading,
  InlineCode,
  Input,
  Link,
  List,
  ListItem,
  RadioButton,
  Textarea,
  TwitterMention,
  VisuallyHidden,
} from '@ds-pack/components'

export default function App() {
  let [checked, setChecked] = useState(false)
  let [text, setText] = useState('')
  return (
    <Box m="4">
      <Stack gap="10">
        <Box
          maxWidth={{
            small: '94vw',
            medium: '80vw',
            large: '70ch',
          }}
        >
          Testing things
        </Box>
        <Stack gap="4">
          <Text>Foo</Text>
          <Text>Bar</Text>
          <Text>Baz</Text>
        </Stack>
        <Stack inline gap="4">
          <Text>Foo</Text>
          <Text>Bar</Text>
          <Text>Baz</Text>
        </Stack>
        <Blockquote>Testing!</Blockquote>
        <Stack inline gap="5">
          <Button variant="primary">Primary</Button>
          <Button variant="ghost">Primary</Button>
          <Button variant="text">Primary</Button>
          <Button variant="secondary">Primary</Button>
        </Stack>
        <Stack gap="5" inline>
          <Button disabled variant="primary">
            Primary
          </Button>
          <Button disabled variant="ghost">
            Primary
          </Button>
          <Button disabled variant="text">
            Primary
          </Button>
          <Button disabled variant="secondary">
            Primary
          </Button>
        </Stack>
        <Chip variant="primary">Chip!</Chip>
        <Chip>Chip!</Chip>
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
        <Figure
          alt=""
          src="https://images.unsplash.com/photo-1645193584649-570f8f1eaddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          caption="Some Caption!"
        />
        <GitHubMention>hamlim</GitHubMention>
        <TwitterMention>immatthamlin</TwitterMention>
        <Stack gap="4">
          <Heading variant="h1">H1</Heading>
          <Heading variant="lead">lead</Heading>
          <Heading variant="h2">h2</Heading>
          <Heading variant="h3">h3</Heading>
          <Heading variant="subhead">subhead</Heading>
        </Stack>
        <InlineCode>const foo = 'bar';</InlineCode>
        <Input value={text} onChange={setText}>
          Input!
        </Input>
        <List variant="base">
          <ListItem>Yo</ListItem>
        </List>
        <List variant="ordered">
          <ListItem>Yo</ListItem>
        </List>
        <List variant="unordered">
          <ListItem>Yo</ListItem>
        </List>
        <RadioButton name="foo" value="radio" onChange={setChecked}>
          Testing!
        </RadioButton>
        <RadioButton name="foo" value="checkbox" onChange={setChecked}>
          Another!
        </RadioButton>
        <Textarea value={text} onChange={setText}>
          Textarea!
        </Textarea>
      </Stack>
    </Box>
  )
}
