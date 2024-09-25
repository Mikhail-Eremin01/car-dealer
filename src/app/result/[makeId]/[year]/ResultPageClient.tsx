'use client';
import React from 'react';
import './styles.css';

interface VehicleModel {
	Model_ID: number;
	Model_Name: string;
}

interface ResultPageClientProps {
	models: VehicleModel[];
}

const ResultPageClient: React.FC<ResultPageClientProps> = ({ models }) => {
	return (
		<div className="container">
			<h1 className="title">Car Models</h1>
			{models.length > 0 ? (
				<ul className="modelList">
					{models.map((model) => (
						<li key={model.Model_ID} className="modelItem">
							{model.Model_Name}
						</li>
					))}
				</ul>
			) : (
				<p className="noModels">No models found.</p>
			)}
		</div>
	);
}

export default ResultPageClient;
