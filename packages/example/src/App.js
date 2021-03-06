import React, { useState, useEffect, forwardRef } from 'react'
import ReactDOM, { createPortal, flushSync } from 'react-dom'
import * as components from '@ds-pack/components'
import styled from 'styled-components'
import { useSharedRef } from '@ds-pack/use-refs'
import { createPopper, reposition } from 'nanopop'

// @see https://github.com/facebook/react/issues/18591#issuecomment-613026224
function flush(cb) {
  // @ts-ignore
  flushSync(cb)
}

let {
  ThemeProvider,
  Box,
  Banner,
  Stack,
  Text,
  Label,
  List,
  ListItem,
  InlineCode,
  VisuallyHidden,
  theme,
  Link,
  Button,
  Tapable,
  Reset,
  Checkbox,
  Heading,
  Blockquote,
  Figure,
  Input,
  Textarea,
  Chip,
  RadioButton,
  Portal,
  useDropdown,
  DropdownButton,
  DropdownMenu,
} = components

// let DropdownMenu = forwardRef(function DropdownMenu({ isOpen, ...props }, ref) {
//   return (
//     <Portal isOpen={isOpen}>
//       <Box position="fixed" ref={ref}>
//         <Box {...props} />
//       </Box>
//     </Portal>
//   )
// })

// let DropdownButton = forwardRef(function DropdownButton(
//   { children, isOpen, ...props },
//   ref,
// ) {
//   return (
//     <Box
//       is={Tapable}
//       ref={ref}
//       borderRadius="$0"
//       border="solid 2px"
//       borderColor={isOpen ? '$primary' : '$black'}
//       backgroundColor="$white"
//       p="$2"
//       boxShadow={isOpen ? 'var(--shadows-focusShadow)' : null}
//       _focus={{
//         boxShadow: 'var(--shadows-focusShadow)',
//         borderColor: '$primary',
//       }}
//       {...props}
//     >
//       {children}
//     </Box>
//   )
// })

// function useDropdown() {
//   let [isOpen, setOpen] = useState(false)
//   let [buttonRef, setButtonRef] = useState()
//   let [menuRef, setMenuRef] = useState()
//   let [menuStyles, setMenuStyles] = useState({})

//   useEffect(() => {
//     if (buttonRef && menuRef) {
//       let buttonWidth = buttonRef.clientWidth
//       setMenuStyles({ width: buttonWidth })
//       reposition(buttonRef, menuRef, {
//         position: 'bottom-start',
//       })
//     }
//   }, [buttonRef, menuRef])

//   return {
//     isOpen,
//     setOpen,
//     onClick(e) {
//       if (!e.defaultPrevented) {
//         setOpen((o) => !o)
//       }
//     },
//     buttonRef: setButtonRef,
//     menuRef: setMenuRef,
//     menuStyles,
//   }
// }

function Dropdown() {
  let { isOpen, onClick, buttonRef, menuRef, menuStyles } = useDropdown()

  return (
    <>
      <DropdownButton isOpen={isOpen} ref={buttonRef} onClick={onClick}>
        Status
      </DropdownButton>
      <DropdownMenu
        isOpen={isOpen}
        ref={menuRef}
        height={300}
        width={300}
        left={0}
        backgroundColor="$white"
        borderRadius="$0"
        boxShadow="0px 0px 10px 4px var(--colors-gray-1)"
        p="$2"
        {...menuStyles}
      >
        <Text>Dropdown</Text>
      </DropdownMenu>
    </>
  )
}

function Demo() {
  let [c, set] = useState(false)
  let [val, setVal] = useState('')
  let [selected, setSelected] = useState(null)
  function selectFood(value) {
    setSelected(value)
  }
  return (
    <>
      <Stack gap="$4" p="$5" bg="$gray-0" className="App">
        <Dropdown />
        <Box is="fieldset">
          <Box is="legend">Select your favorite food:</Box>

          <RadioButton
            onChange={selectFood}
            checked={selected === 'pizza'}
            name="food"
            value="pizza"
          >
            Pizza
          </RadioButton>
          <RadioButton
            onChange={selectFood}
            checked={selected === 'pasta'}
            name="food"
            value="pasta"
          >
            Pasta
          </RadioButton>
          <RadioButton
            onChange={selectFood}
            checked={selected === 'burritos'}
            name="food"
            value="burritos"
          >
            Burritos
          </RadioButton>
        </Box>
        <Stack
          props={{ flexGrow: 1 }}
          inline
          gap="$4"
          alignItems="flex-end"
          mb="$2"
        >
          <Input
            // autoFocus
            display="flex"
            flexGrow={1}
            value={val}
            onChange={setVal}
          >
            Test
          </Input>
          <Button>Test</Button>
        </Stack>

        <Button variant="default">Default</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="text">text</Button>

        <Button variant="default" disabled>
          Default
        </Button>
        <Button variant="ghost" disabled>
          Ghost
        </Button>
        <Button variant="text" disabled>
          text
        </Button>

        <Chip variant="primary">Primary</Chip>
        <Chip variant="default">Default</Chip>
        <Chip>no variant</Chip>

        <hr />

        <Heading variant="lead" is="h1">
          Lead
        </Heading>
        <Heading variant="h1" is="h1">
          H1
        </Heading>
        <Heading variant="h2" is="h2">
          H2
        </Heading>
        <Heading variant="h3" is="h3">
          H3
        </Heading>
        <Heading variant="subhead" is="h4">
          H4
        </Heading>

        <hr />

        <Input />

        <Input placeholder="foo" />

        <Input disabled />

        <Input disabled placeholder="foo" />

        <hr />

        <Textarea value={val} onChange={setVal}>
          Big Textbox here
        </Textarea>

        <Textarea
          placeholder="Some long placeholder here"
          disabled
          value={val}
          onChange={setVal}
        >
          Big Textbox here
        </Textarea>

        <hr />

        <Figure
          src="https://images.unsplash.com/photo-1592005915374-c93d61ad1913?ixlib=rb-1.2.1&auto=format&fit=crop&w=1629&q=80"
          alt="Yo"
          caption="Big ass image dude!"
        />

        <hr />
        <Blockquote>Insert a good quote here</Blockquote>
        <hr />
        <Text>
          Some text with an inline{' '}
          <Link is="a" href="#foo">
            Link
          </Link>{' '}
          alongside other text
        </Text>
        <hr />
        <Checkbox checked={c} onChange={() => set((c) => !c)}>
          Checkbox input
        </Checkbox>
        <Checkbox disabled>Checkbox input</Checkbox>

        <Checkbox disabled checked>
          Checkbox input
        </Checkbox>

        <Checkbox indeterminate disabled>
          Checkbox input
        </Checkbox>

        <Checkbox checked={c} onChange={set}>
          Checkbox input with a ton of text that will wrap onto multiple lines.
          This description is really important make sure to read all of it!@
        </Checkbox>

        <hr />

        <Button
          disabled
          onClick={() => {
            console.log('Called!')
          }}
          forwardedAs={Tapable}
        >
          test
        </Button>
        <Button
          width="100%"
          onClick={() => {
            console.log('Called!')
          }}
          forwardedAs={Tapable}
        >
          test
        </Button>
        <hr />
        <Stack gap={2} props={{ mt: 10 }}>
          <Banner variant="info">
            <Text>Info banner</Text>
          </Banner>
          <Banner variant="error">
            <Text>Error banner</Text>
          </Banner>
          <Banner variant="warning">
            <Text>Warning banner</Text>
          </Banner>
          <Banner variant="success">
            <Text>Success banner</Text>
          </Banner>
        </Stack>
        <hr />
        <Label as={Stack} gap={2}>
          <Text>Some text here</Text>
          <input type="text" defaultValue="foo" />
        </Label>
        <hr />
        <List is="ol" variant="ordered">
          <ListItem>Foo</ListItem>
          <ListItem>Bar</ListItem>
        </List>
        <List is="ul" variant="unordered">
          <ListItem>Foo</ListItem>
          <ListItem>Bar</ListItem>
        </List>
        <List is="ul" variant="base">
          <ListItem>Foo</ListItem>
          <ListItem>Bar</ListItem>
        </List>
        <hr />
        <InlineCode>InlineCode</InlineCode>
        <VisuallyHidden>
          <p>Test</p>
        </VisuallyHidden>
      </Stack>
    </>
  )
}

function getInverse({ target: hex, black = '#000000', white = '#ffffff' }) {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1)
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.')
  }
  var r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16)
  // http://stackoverflow.com/a/3943023/112731
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? black : white
}

function Swatch({ value, name }) {
  return (
    <Box
      display="flex"
      height={50}
      justifyContent="center"
      alignItems="center"
      borderRadius="$0"
      style={{ backgroundColor: value, color: getInverse({ target: value }) }}
      fontFamily="$base"
    >
      {name}
    </Box>
  )
}

function Colors({ mode = 'multi' } = {}) {
  return Object.entries(theme.colors).map(([key, value]) => {
    if (typeof value === 'string') {
      if (mode === 'single') {
        return <Swatch value={value} key={key} name={key} />
      }
      return null
    } else {
      if (mode === 'multi') {
        return value.map((color, index) => (
          <Swatch
            value={color}
            name={`${key}.${index}`}
            key={`${key}.${index}`}
          />
        ))
      }
      return null
    }
  })
}

function Theme() {
  return (
    <>
      <Box
        display="grid"
        gridGap="$4"
        gridTemplateColumns={['repeat(1, 1fr)', 'repeat(5, 1fr)']}
      >
        <Colors />
      </Box>
      <Text>Named Colors:</Text>
      <Stack gap="$2">
        {Object.entries(theme.colors).map(([key, value]) => {
          if (typeof value === 'string') {
            return <Swatch value={value} key={key} name={key} />
          }
          return null
        })}
      </Stack>
    </>
  )
}

function App() {
  return (
    <ThemeProvider
    // theme={{
    //   ...theme,
    //   'button-variant': {
    //     primary: {
    //       color: theme.colors.white,
    //       backgroundColor: theme.colors.primary,
    //       '&:focus': {
    //         outline: theme.focusShadow,
    //       },
    //     },
    //     secondary: {
    //       backgroundColor: theme.colors.secondary,
    //       '&:focus': {
    //         outline: `0 0 4px 2px ${theme.colors.secondaryLight}`,
    //       },
    //     },
    //     tertiary: {
    //       backgroundColor: theme.colors.tertiary,
    //       '&:focus': {
    //         outline: `0 0 4px 2px ${theme.colors.tertiaryLight}`,
    //       },
    //     },
    //     destructive: {
    //       backgroundColor: theme.colors.red[5],
    //       '&:focus': {
    //         outline: `0 0 4px 2px ${theme.colors.red[4]}`,
    //       },
    //     },
    //     'button-appearance': {
    //       text: {},
    //       filled: {
    //         padding: '.5em 1em',
    //         borderRadius: theme.radii[0],
    //       },
    //       ghost: {
    //         padding: '.5em 1em',
    //         borderRadius: theme.radii[0],
    //       },
    //     },
    //   },
    // }}
    >
      <Reset />
      <Demo />
      <Theme />
    </ThemeProvider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
