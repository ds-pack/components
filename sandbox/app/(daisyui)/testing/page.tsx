import {
  Banner,
  Blockquote,
  Button,
  // Checkbox,
} from '@ds-pack/components-daisyui'
import Interactive from './interactive'

export default function Page() {
  return (
    <div className="m-10 flex flex-col gap-2">
      <Banner variant="info">Yo!</Banner>
      <Banner variant="success">Yo!</Banner>
      <Banner variant="warning">Yo!</Banner>
      <Banner variant="error">Yo!</Banner>
      <Blockquote>Hello!</Blockquote>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="info">Info</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="success">Success</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
      <Interactive />
    </div>
  )
}
