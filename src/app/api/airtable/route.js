import { NextResponse } from 'next/server';
import Airtable from 'airtable';

const fetchAirtableData = async () => {
    const base = new Airtable({ apiKey: process.env.AIRTABLE_PAC }).base(process.env.BASE_ID);
    const records = await base('_projects').select({}).all();
    const processedData = records.map((record) => {
      return {
        options: [record.fields.projectTitle, record.fields.names],
      };
    });
    console.log('Processed Data:', processedData);
    return processedData;
}

export async function GET(request) {
    try {
        const airtableData = await fetchAirtableData();  // Simplified call
        return NextResponse.json({ result: airtableData });
    } catch (error) {
        console.error('Error fetching Airtable data:', error);
        return NextResponse.error(new Error('Failed to fetch Airtable data'));
    }
}