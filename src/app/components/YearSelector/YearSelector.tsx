import './styles.css';

interface YearSelectorProps {
	years: number[];
	selectedYear: string;
	onYearChange: (year: string) => void;
}
  
const YearSelector: React.FC<YearSelectorProps> = ({ years, selectedYear, onYearChange }) => {
	return (
		<div className="mb-4 w-[300px]">
			<label className="label-custom">Select year of release</label>
			<select
				value={selectedYear}
				onChange={(e) => onYearChange(e.target.value)}
				className="select-custom"
			>
				<option value="">Select year</option>
				{years.map((year) => (
					<option key={year} value={year}>
						{year}
					</option>
				))}
			</select>
		</div>
	)
}
  
export default YearSelector;
  