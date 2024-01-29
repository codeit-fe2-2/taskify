export default function formatDateTime(dateTimeString: string) {
	const datetimeValue = new Date(dateTimeString);

	const localDate = datetimeValue.toLocaleString('ko-KR', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		hourCycle: 'h24',
		timeZone: 'Asia/Seoul',
	});
	return `${localDate}`;
}
