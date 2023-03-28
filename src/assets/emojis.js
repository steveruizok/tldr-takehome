const emojiRange = [
    [128513, 128591],
    [128640, 128704],
  ]

export const emojis = emojiRange
    .map(([start, end]) =>
      Array.from({ length: end - start }, (x, i) => i + start)
    )
    .flat()