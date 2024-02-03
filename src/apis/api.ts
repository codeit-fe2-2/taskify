import axios from 'axios';
const baseURL = 'https://sp-taskify-api.vercel.app/2-2';
export const deleteData = async (id: number) => {
	try {
		await axios.delete(`${baseURL}/${id}`);
	} catch (error) {
		alert(error);
	}
};
