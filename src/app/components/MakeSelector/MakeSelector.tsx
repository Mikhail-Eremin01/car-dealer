import './styles.css';

interface Make {
	MakeId: number;
	MakeName: string;
}
  
interface MakeSelectorProps {
	makes: Make[];
	selectedMake: string;
	onMakeChange: (make: string) => void;
}
  
const MakeSelector: React.FC<MakeSelectorProps> = ({ makes, selectedMake, onMakeChange }) => {
	return (
		<div className="mb-4 w-[300px]">
			<label className="label-custom">Select brand</label>
			<select
				value={selectedMake}
				onChange={(e) => onMakeChange(e.target.value)}
				className="select-custom"
			>
				<option value="" className="text-gray-500">Select brand</option>
				{makes.map((make) => (
					<option key={make.MakeId} value={make.MakeId}>
						{make.MakeName}
					</option>
				))}
			</select>
		</div>
	)
}
  
export default MakeSelector;
