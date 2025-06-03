import { Block } from "./block"
import type { BlockTypes } from "./segment"

type SetBlockProps = {
  block: BlockTypes
}

export function SetBlock({ block }: SetBlockProps) {
  return (
    <div className="border-l-4 border-gray-600 pl-4 mb-4">
      <div className="font-bold text-lg mb-2">{block.render} (x{block.reps})</div>
      <div>
        {block.blocks?.map((innerBlock) => (
          <div key={innerBlock.id} className="border-l-2 border-gray-300 pl-4 mb-2">
            <Block block={innerBlock} />
          </div>
        ))}
      </div>
    </div>
  )
}
