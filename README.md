# tldraw take-home challenge

[Deployed Here](https://taha-hassan-git.github.io/tldr-takehome/) 

This is a take home challenge for an apprenticeship with tldraw, a tiny little drawing app.

The brief was to implement a sticker feature as below.

![reference](https://github.com/tldraw/tldraw-takehome/raw/main/reference.gif) 

## Technologies used

I chose to complete this challenge in React because I was already deep into my React version and was enjoying the challenge of it, so I chose to see it through in React.

## Assumptions

- Since I'm not working with a team, it isn't necessary to make branches for features I'm working on.
- However my commits should be small, discrete and frequent in order to tell a legible story of the development of the project to my potential employers. (Hello!)
- I'll need to follow the reference very closely and try to implement all the features I see.

## Process

I initially began by following [this video](https://youtu.be/ZcDWyVj6-uU) to implement a simple drag and drop feature in React. I thought I would build from there and adapt it to work with clicks instead of dragging, and to clone elements rather than move them. it felt like the right solution because it used hooks I wasn't familiar with (useRef and useEffect), instead of state. However, I learned as I went on that this was a horrible foundation, just because it's difficult doesn't mean it's right! I definitely should have been using state from the beggining, and I eventually had to undo almost all the work I did.

This led to some poor discipline around version control and some giant commits. I don't think my commit history tells a legible story of the development of this feature.

## Stretch user stories

1. As a user I want to be able to resize emojis I've placed
2. As a user I want to be able to select skin tones that match my own
3. As a user I want to be able to select from a broader range of emojis
4. As a user I want to be able to delete stickers I've placed. **(This is the one I chose.)**

I chose the delete story because it was the first thing extra thing I wanted to do while using the app. I was making a big heart out of hearts and one of the lines was wonky.

## What I would tackle next

- [x] I would extract the logic for the canvas and emoji selector into different components.
- [x] I would visibly change the cursor when in delete mode and add a keyboard shortcut for it.
- [ ] The next feature I would implement would be selecting a broader range of emojis.
