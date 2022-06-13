## Screen shot for the projects:

How to use? at each project root directory:
```linux
npm install
npm start
```

- Mini project 1:

> shadow
<img src="https://github.com/hyc0812/my-first-react-app/blob/master/screenshots/mini_1.png" width="600">

- Mini project 2:

> increasing and decreasing the number
<img src="https://github.com/hyc0812/my-first-react-app/blob/master/screenshots/mini_2.png" width="600">

- Mini project 3:

> toggle game
<img src="https://github.com/hyc0812/my-first-react-app/blob/master/screenshots/mini_3.png" width="600">

- Mini project 4:

> Form practice
<img src="https://github.com/hyc0812/my-first-react-app/blob/master/screenshots/mini_4.png" width="600">

- Mini project 5:

> Sign up form
<img src="https://github.com/hyc0812/my-first-react-app/blob/master/screenshots/mini_5.png" width="600">

- Mini project 6:

> have access to online JSON database
<img src="https://github.com/hyc0812/my-first-react-app/blob/master/screenshots/mini_6.png" width="600">

- Mini project 7:

> Display window width
<img src="https://github.com/hyc0812/my-first-react-app/blob/master/screenshots/mini_7.png" width="600">


- Project 1:

<img src="https://github.com/hyc0812/my-first-react-app/blob/master/screenshots/project-1.png" width="600">


- Project 2:

<img src="https://github.com/hyc0812/my-first-react-app/blob/master/screenshots/project-2.png" width="600">

- Project 3:

<img src="https://github.com/hyc0812/my-first-react-app/blob/master/screenshots/screenshot-3.png" width="600">

- Project 4:

<img src="https://github.com/hyc0812/my-first-react-app/blob/master/screenshots/project_4.png" width="600">

- Project 5:
> Add light mode dark mode hook

<img src="https://github.com/hyc0812/my-first-react-app/blob/master/screenshots/project_5.png" width="600">


- Project 6: [Demo Page](http://hyc0812.github.io/deploy-react-simple-notes)
> NoteBoard with MarkDown features

<img src="https://github.com/hyc0812/my-first-react-app/blob/master/screenshots/project_6.png" width="600">


- Project 7: [Demo Page](https://hyc0812.github.io/deploy-react-project7-tenzies/)
> Fun game Tenzies with winning effect package confetti

<img src="https://github.com/hyc0812/my-first-react-app/blob/master/screenshots/project_7_1.png" width="600">
<img src="https://github.com/hyc0812/my-first-react-app/blob/master/screenshots/project_7_2.png" width="600">

--- 
MEMO for deploy on git (after pushing):
```linux
npm install gh-pages (--save) (-dev) (--force)
```

Add the following to first line of package.json:
 `"homepage": "http://hyc0812.github.io/deploy-react-simple-notes",`
 
Add the following in "scripts":

`"predeploy":"npm run build",`
`"deploy":"gh-pages -d build",`

Finally run:
```linux
npm run deploy
```
