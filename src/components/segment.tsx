import { Block } from "./block"
import { SetBlock } from "./setBlock"

type NestedBlockTypes = {
  type: string
  id: string
  duration: {
    value: number
    unit: string
  },
  intensity: string
  render: string
}

export type BlockTypes = {
  type: string;
  id: string;
  reps?: number;
  duration?: {
    value: number;
    unit: string;
  };
  intensity?: string;
  note?: string;
  render: string;
  blocks?: NestedBlockTypes[]
}

type SegmentTypes = {
  title: string;
  blocks: BlockTypes[]
}

type SegmentProps = {
  segment: SegmentTypes
}

export function Segment({ segment }: SegmentProps) {
  return (
    <section className="mb-8">
      <h3 className="text-2xl font-extrabold border-b-2 border-gray-300 pb-2 mb-4 text-gray-800">
        {segment.title}
      </h3>

      {segment.blocks.map((block) => (
        block.type === 'set' ? (
          <SetBlock key={block.id} block={block} />
        ) : (
          <Block key={block.id} block={block} />
        )
      ))}
    </section>
  )
}