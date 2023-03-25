import { Banner, Blockquote, Button, Chip } from '@ds-pack/components-daisyui'
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
      <Chip>Chip!</Chip>
      <Chip variant="outline">Chip!</Chip>
      <Chip variant="primary">Chip!</Chip>
      <Chip variant="secondary">Chip!</Chip>
      <Chip variant="accent">Chip!</Chip>
      <Chip variant="ghost">Chip!</Chip>
      <Chip variant="info">Chip!</Chip>
      <Chip variant="success">Chip!</Chip>
      <Chip variant="warning">Chip!</Chip>
      <Chip variant="error">Chip!</Chip>
    </div>
  )
}
