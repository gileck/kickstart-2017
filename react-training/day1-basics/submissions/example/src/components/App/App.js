import React from 'react';
import './App.scss';

import * as Comps from './Components';

const Container = ({title, children}) => {
	return (<div className='container'>
		<h2>{title}</h2>
			{children}
		</div>);
}

const sandboxData = [
	{
		name: 'Title',
		props: {
			text: 'Bob'
		}
	},
	{
		name: 'Heading',
		props: {
			title: 'Bob',
			subtitle: 'Bobette'
		}
	},
	{
		name: 'ImageView',
		props: {
			src: 'https://i.ytimg.com/vi/MCn9lL94sxQ/maxresdefault.jpg',
			caption: 'WAT'
		}
	},
	{
		name: 'SimpleGallery',
		props: {
			images: [
				'https://i.ytimg.com/vi/MCn9lL94sxQ/maxresdefault.jpg',
				'http://i.imgur.com/iJoG4Ks.jpg'
			]
		}
	},
	{
		name: 'TodoItem',
		props: {
			completed: false,
			title: 'Buy todo apps'
		}
	},
	{
		name: 'SimpleCanvas',
		props: {
			data: [['red', 'white'], ['yellow', 'green']],
			width: 500
		}
	},
	{
		name: 'Button',
		props: {
			onClick: () => alert('clicked!'),
			onSpecialClick: () => alert('specially clicked!')
		}
	},
	{
		name: 'TodoItem2',
		props: {
			completed: false,
			title: 'Buy todo apps',
			onRemove: () => alert('Noooo000ooOOOO!')
		}
	},
	{
		name: 'SimpleCanvas2',
		props: {
			data: [['red', 'white'], ['yellow', 'green']],
			width: 500,
			onCellClick: (i, j, c) => alert(`you clicked on [${i}, ${j}]`)
		}
	},
	{
		name: 'TodoApp',
		props: {
			items: [
				{title: 'Reach 1M', done: true},
				{title: 'Reach 5M', done: false}
			]
		}
	}
]


const App = () => {
  return (
    <div id='app'>
			<h1>React Basics Exercises!</h1>
			<p>Each one of the items is an exercise. You should write a component in the "Components.js" file with the right name (see the initial "Title" one).</p>
			<p>Note that only the components file needs to be changed!</p>
			<marquee><em>Good luck!</em></marquee>
			{sandboxData.map((data, i) => {
				const Comp = Comps[data.name];
				return (<Container title={`${i + 1}. ${data.name}`}>
						{Comp ? <Comp {...data.props}>{data.children}</Comp> : <h4>TODO!</h4>}
					</Container>)
			})}
			<h5>Don't forget to commit and push to a folder with your name!</h5>
    </div>
  );
}

export default App;
