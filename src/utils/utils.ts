export async function getModelsForMakeIdYear(makeId: string, year: string) {
	const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`;
	
	const response = await fetch(url);

	if (!response.ok) {
	  throw new Error('Error with getting data');
	}
	
	const data = await response.json();
	return data.Results;
}