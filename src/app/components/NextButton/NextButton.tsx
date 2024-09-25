import Link from 'next/link'

interface NextButtonProps {
	selectedMake: string;
	selectedYear: string;
}

const NextButton: React.FC<NextButtonProps> = ({ selectedMake, selectedYear }) => {
	const isDisabled = !selectedMake || !selectedYear;

	return (
		<Link href={`/result/${selectedMake}/${selectedYear}`}>
			<button
				disabled={isDisabled}
				className={`w-full px-4 py-2 text-white rounded ${isDisabled ? 'bg-gray-400' : 'bg-blue-500'} transition duration-200`}
			>
				Next
			</button>
		</Link>
	)
}

export default NextButton;
