import axios from 'axios';
const basicURL = 'https://sp-taskify-api.vercel.app/2-2';

export const deleteColumn = async (columnId: number) => {
	try {
		await axios.delete(`${basicURL}/columns/${columnId}`);
	} catch (error) {
		alert(error);
	}
};

export const createDashBoard = async (title: string, color: string) => {
	try {
		await axios.post(`${basicURL}/dashboards`, {
			title: title,
			color: color,
		});
	} catch (error) {
		alert(error);
	}
};

export const createColumns = async (title: string, dashboardId: number) => {
	try {
		await axios.post(`${basicURL}/columns}`, {
			title: title,
			dashboardId: dashboardId,
		});
	} catch (error) {
		alert(error);
	}
};
