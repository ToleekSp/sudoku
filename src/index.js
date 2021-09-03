module.exports = function solveSudoku(matrix) {
	const size = matrix.length;
	const smallSize = Math.sqrt(size);
  
	function findZero(matrix)
	{
		for(let row = 0; row < size; row++)
		{
			for(let col = 0; col < size; col++)
			{
				if(matrix[row][col] === 0)
				{
					return [row, col];
				}
			}
		}

		return null;
	}
 
	function check(number, position, matrix)
	{
		let row = position[0];
		let col = position[1];

		for (let i = 0; i < size; i++)
		{
			if (matrix[i][col] === number && i !== row)
			{
				return false;
			}
		}

		for (let i = 0; i < size; i++)
		{
			if (matrix[row][i] === number && i !== col)
			{
				return false;
			}
		}


		let smallRow = Math.floor(row/smallSize) * smallSize;
		let smallCol = Math.floor(col/smallSize) * smallSize;

		for (let i = smallRow; i < smallRow + smallSize; i++)
		{
			for (let j = smallCol; j < smallCol + smallSize; j++)
			{
				if (matrix[i][j] === number && i !== row && j !== col)
				{
					return false;
				}
			}
		}

		return true;
	}
 
	function solve()
	{
		let position = findZero(matrix);

		if(position === null)
		{
			return true;
		}

		for(let i = 1; i < size + 1; i++)
		{
			let number = i;
			if(check(number, position, matrix))
			{
				let x = position[0];
				let y = position[1];

				matrix[x][y] = number;

				if(solve())
				{
					return true;
				}

				matrix[x][y] = 0;
			}
		}

		return false;
	}

	solve();
	return matrix;
}  
