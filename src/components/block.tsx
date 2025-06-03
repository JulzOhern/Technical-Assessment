import type { BlockTypes } from "./segment"

type BlockProps = {
  block: BlockTypes
}

// Style colors based on intensity level
const intensityColors = {
  easy: 'border-green-400 text-green-600',
  fartlek: 'border-yellow-400 text-yellow-600',
  hard: 'border-red-500 text-red-600',
  recovery: 'border-teal-500 text-teal-600',
  default: 'border-gray-400 text-gray-600'
};

export function Block({ block }: BlockProps) {
  // Get the intensity key for color mapping
  const key = block.intensity as keyof typeof intensityColors
  const colorClasses = intensityColors[key] || intensityColors.default;

  return (
    <div className={`border-l-4 pl-4 mb-3 ${colorClasses}`}>
      <div className="font-semibold text-lg mb-1">
        {block.render}
      </div>
      {block.note && (
        <div className="text-sm italic text-gray-600">{block.note}</div>
      )}
    </div>
  );
}
