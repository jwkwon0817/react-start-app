export const OddEvenResult = ({ count }) => {
	console.log(count);
	return (
		<>
			{
				count % 2 === 0 ? 'Even' : 'Odd'
			}
		</>
	);
};