'use client'
import { useState, useEffect, Suspense } from 'react'
import MakeSelector from './components/MakeSelector/MakeSelector'
import YearSelector from './components/YearSelector/YearSelector'
import { Make } from '@/types'
import NextButton from './components/NextButton/NextButton'

const Home: React.FC = () => {
	const [makes, setMakes] = useState<Make[]>([])
	const [selectedMake, setSelectedMake] = useState<string>('')
	const [selectedYear, setSelectedYear] = useState<string>('')
	const [years, setYears] = useState<number[]>([])

	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}vehicles/GetMakesForVehicleType/car?format=json`)
		.then((response) => response.json())
		.then((data) => setMakes(data.Results))

		const currentYear = new Date().getFullYear()
		const yearsArray = Array.from({ length: currentYear - 2015 + 1 }, (_, k) => 2015 + k)
		setYears(yearsArray)
	}, [])

	const handleMakeChange = (make: string) => setSelectedMake(make) 
	const handleYearChange = (year: string) => setSelectedYear(year)

	return (
		<div className="flex flex-col items-center justify-center min-h-screen container mx-auto p-4">
			<div>
				<h1 className="text-2xl font-bold mb-4">Filtering cars</h1>
				<Suspense fallback={<div>Uploading models...</div>}>
					<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
						<MakeSelector 
							makes={makes} 
							selectedMake={selectedMake} 
							onMakeChange={handleMakeChange} 
						/>
						<YearSelector 
							years={years}
							selectedYear={selectedYear} 
							onYearChange={handleYearChange} 
						/>
					</div>
				</Suspense>
				<NextButton selectedMake={selectedMake} selectedYear={selectedYear} />
			</div>
		</div>
	)
}

export default Home;