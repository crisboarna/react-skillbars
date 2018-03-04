# React Skillbars

### React NPM library containing skill bars with full color customizations and responsive layout.
[![version](https://img.shields.io/npm/v/react-skillbars.svg)](http://npm.im/react-skillbars)
[![travis build](https://img.shields.io/travis/crisboarna/react-skillbars.svg)](https://travis-ci.org/crisboarna/react-skillbars)
[![codecov coverage](https://img.shields.io/codecov/c/github/crisboarna/react-skillbars.svg)](https://codecov.io/gh/crisboarna/react-skillbars)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8d87ae38dea34aa09d0daa0ab81b81cd)](https://www.codacy.com/app/crisboarna/react-skillbars)
[![dependency status](https://img.shields.io/david/crisboarna/react-skillbars.svg)](https://david-dm.org/crisboarna/react-skillbars)
[![MIT License](https://img.shields.io/npm/l/react-skillbars.svg)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)
[![Greenkeeper](https://badges.greenkeeper.io/crisboarna/react-skillbars.svg)](https://greenkeeper.io/)
[![code style](https://img.shields.io/badge/code%20style-airbnb-brightgreen.svg)](https://img.shields.io/badge/code%20style-airbnb-brightgreen.svg)

## Live Demo
Try the interactive demo [here](https://crisboarna.github.io/react-skillbars)

## Installation

```javascript
npm i react-skillbars
```

## Table of Contents
* [Setup](#setup)
* [Properties](#properties)
* [Development](#development)
  * [Tests](#tests)
  * [Build](#build)
  * [Run](#run)
  
## Setup

```javascript
import SkillBar from 'react-skillbars';
...
const skills = [
  {type: "Java", level: 85},
  {type: "Javascript", level: 75},
];
...
<SkillBar skills={skills}/>
```

## Properties
<b>skills</b> - Required

Array of skills to be displayed. Each array entry is an object containing at minimum `type` and `level` where <br/>

`type` - name of skill <br/>
`level` - % of skill from 0-100

<b>colors</b> - Optional

Object of global coloring information for bar, title text & background. It accepts global colors or color codes such as 
```javascript
colors = {
  bar: 'red',
  title: {
    text: '#abc123',
    background: '#fff'
  }
}
```
hue range data combined
```javascript
colors = {
  bar: '#fffaaa',
  title: {
    text: {
      hue: {
        minimum: 30,
        maximum: 150
      },
      saturation: 50,
      level: {
        minimum: 30,
        maximum: 90
      }
    },
    background: {
      hue: 20,
      saturation:50,
      level:30
    }
  }
}
```
<b>animationDelay</b> - Optional - defaults to 3000ms

Delay from mounting of component to when animation is triggered

<b>offset</b> - Optional - defaults to 25

Artificial tweaking of viewport for animation triggering. When component is completely contained by the artificial viewport animation is triggered. When element has a greater size than viewport size then animation triggers when element top is lower than middle of screen + offset and element bottom is higher than middle minus offset.

<b>height</b> - Optional

Specifies the height of each bar in the component. Accepts plain numbers which default to pixel units

```javascript
<SkillBar skills={SKILLS} height={10}/>
```

strings with unit attached at end as

```javascript
<SkillBar skills={SKILLS} height={'10vh'}/>
```


## Development

In the project root run 

```javascript
npm i
```

## Tests

You can run the test suite by typing 
```javascript
npm t
```

## Build

Building the project demo page and npm module is done via 
```javascript
npm run build
```

Building individual parts is done via
```javascript
npm run build:ghpage
```
and 
```javascript
npm run build:module
```
respectively.

## Run
You can run the demo project which uses the skillbar by typing
```javascript
npm start
```