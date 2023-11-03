import Airtable from "airtable";
import route from '../app/api/airtable/route.js'

const getAirtableData = async (options) => {
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
 
export default getAirtableData;