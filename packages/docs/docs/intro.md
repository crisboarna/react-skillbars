---
sidebar_position: 1
---

# Introduction

Let's discover **react-skillbars in less than 5 minutes**.

## Getting Started

Get started by **adding the lib as a dependency**.

```bash
yarn add react-skillbars
```

## Importing

```typescript
import SkillBar from 'react-skillbars';
```

### What you'll need

- [Node.js](https://nodejs.org/en/download/):

  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) (Optional)

## Description

Provides a percentage completion bar for each entry with highly customizable look and behaviour.

## Properties

### skills

Requirement: required

Array of skills to be displayed. Each array entry is an object containing at minimum `type` and `level` where <br/>

`type` - name of skill <br/>
`level` - % of skill from 0-100

```javascript
const skills = [
  { type: 'Java', level: 85 },
  { type: 'Javascript', level: 75 },
];
```

### colors

Requirement: optional

Default: none

Object of global coloring information for bar, title text & background. It accepts global colors or color codes such as

```javascript
colors = {
  bar: 'red',
  title: {
    text: '#abc123',
    background: '#fff',
  },
};
```

Optionally you can also use hue.

```javascript
colors = {
  bar: '#fffaaa',
  title: {
    text: {
      hue: {
        minimum: 30,
        maximum: 150,
      },
      saturation: 50,
      level: {
        minimum: 30,
        maximum: 90,
      },
    },
    background: {
      hue: 20,
      saturation: 50,
      level: 30,
    },
  },
};
```

### Bar Background

Requirement: optional

Default: transparent

String to determine bar's background color.

```javascript
barBackground = {'transparent'};
```

### animationDelay

Requirement: optional

Default: `3000`ms

Delay from mounting of component to when animation is triggered

### offset

Requirement: optional

Default: `25px`

Artificial tweaking of viewport for animation triggering. When component is completely contained by the artificial viewport animation is triggered. When element has a greater size than viewport size then animation triggers when element top is lower than middle of screen + offset and element bottom is higher than middle minus offset.

### height

Requirement: optional

Default: none

Specifies the height of each bar in the component. Accepts plain numbers which default to pixel units

### animationThreshold

Requirement: optional

Default: `0.8`

Specifies the threshold which indicates at what percentage of the target's visibility the observer's callback

```javascript
<Skillbar skills={SKILLS} height={10} />
```

strings with unit attached at end as

```javascript
<Skillbar skills={SKILLS} height={'10vh'} />
```
