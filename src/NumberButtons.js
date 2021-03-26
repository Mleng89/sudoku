import { useState } from 'react';
import { SudokuGrid } from './SudokuGrid';
export default function NumberButton() {
	const [num, setNum] = useState(0);

	return (
		<div>
			<table className='number_container'>
				<tr>
					<td>
						<a
							href='/#'
							className='button1'
							onClick={(e) => {
								setNum(e.target.innerText);
								console.log('state', num);
							}}
						>
							<h2>1</h2>
						</a>
					</td>
					<td>
						<a
							href='/#'
							className='button2'
							onClick={(e) => {
								setNum(e.target.innerText);
								console.log('state', num);
							}}
						>
							<h2>2</h2>
						</a>
					</td>
					<td>
						<a
							href='/#'
							className='button3'
							onClick={(e) => {
								setNum(e.target.innerText);
								console.log('state', num);
							}}
						>
							<h2>3</h2>
						</a>
					</td>
					<td>
						<a
							href='/#'
							className='button4'
							onClick={(e) => {
								setNum(e.target.innerText);
								console.log('state', num);
							}}
						>
							<h2>4</h2>
						</a>
					</td>
					<td>
						<a
							href='/#'
							className='button5'
							onClick={(e) => {
								setNum(e.target.innerText);
								console.log('state', num);
							}}
						>
							<h2>5</h2>
						</a>
					</td>
					<td>
						<a
							href='/#'
							className='button6'
							onClick={(e) => {
								setNum(e.target.innerText);
								console.log('state', num);
							}}
						>
							<h2>6</h2>
						</a>
					</td>
					<td>
						<a
							href='/#'
							className='button7'
							onClick={(e) => {
								setNum(e.target.innerText);
								console.log('state', num);
							}}
						>
							<h2>7</h2>
						</a>
					</td>
					<td>
						<a
							href='/#'
							className='button8'
							onClick={(e) => {
								setNum(e.target.innerText);
								console.log('state', num);
							}}
						>
							<h2>8</h2>
						</a>
					</td>
					<td>
						<a
							href='/#'
							className='button9'
							onClick={(e) => {
								setNum(e.target.innerText);
								console.log('state', num);
							}}
						>
							<h2>9</h2>
						</a>
					</td>
				</tr>
			</table>
			<div className='sudoku-board'>
				<SudokuGrid value={num} />
				<SudokuGrid value={num} />
				<SudokuGrid value={num} />
				<SudokuGrid value={num} />
				<SudokuGrid value={num} />
				<SudokuGrid value={num} />
				<SudokuGrid value={num} />
				<SudokuGrid value={num} />
				<SudokuGrid value={num} />
			</div>
		</div>
	);
}
