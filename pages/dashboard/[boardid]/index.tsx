import { useEffect, useState } from 'react';

import { deleteColumn } from '@/src/apis/dashboard/deleteColumn';
import { getColumnList } from '@/src/apis/dashboard/getColumnList';
import { postCreateColumn } from '@/src/apis/dashboard/postCreateColumn';
import { putColumnName } from '@/src/apis/dashboard/putColumnName';
import CardList from '@/src/components/dashboard/CardList';
import BasicLayout from '@/src/components/layout/BasicLayout';
import IconButton from '@/src/components/ui/Button/IconButton';
import AlertModal from '@/src/components/ui/Modal/AlertModal';
import CreateModal from '@/src/components/ui/Modal/CreateModal';
import { useModal } from '@/src/contexts/ModalProvider';
import { Column } from '@/src/types/dashboard';

export default function Page() {
	const modalId = crypto.randomUUID();

	const { openModal, closeModal } = useModal();
	const [toastMessage, setToastMessage] = useState<string>('');

	const { data: columnList, execute, dashboardId } = getColumnList();

	const titles = columnList && columnList.map((column) => column.title);

	const handleToastMessage = (message: string) => {
		setToastMessage(message);
	};

	const handleCreateColumn = async (inputValue: string) => {
		await postCreateColumn(inputValue, dashboardId);

		closeModal(modalId);
		handleToastMessage('칼럼을 생성했습니다.');
	};

	const handleDeleteColumnRequest = async (id: number) => {
		await deleteColumn(id);

		closeModal(modalId);
		handleToastMessage('컬럼을 삭제했습니다.');
	};

	const handleDeleteColumn = (id: number) => {
		openModal(
			<AlertModal
				message='컬럼의 모든 카드가 삭제됩니다.'
				cancelButtonName='취소'
				secondButton={true}
				SubmitButtonName='삭제'
				onCancel={() => {
					closeModal(modalId);
				}}
				// eslint-disable-next-line @typescript-eslint/no-misused-promises
				onSubmit={() => handleDeleteColumnRequest(id)}
			/>,
			modalId,
		);
	};

	const handleModifyColumnName = async (inputValue: string, id: number) => {
		await putColumnName(inputValue, id);
		closeModal(modalId);
		handleToastMessage('컬럼 이름을 수정했습니다.');
	};

	const handleModifyColumn = (id: number) => {
		openModal(
			<CreateModal
				modalSize='sm'
				title='컬럼 관리'
				subTitle='이름'
				submitButtonName='변경'
				onCancel={() => closeModal(modalId)}
				titles={titles}
				onColumnSubmit={(inputValue: string) =>
					handleModifyColumnName(inputValue, id)
				}
				handleDeleteColumnRequest={() => {
					closeModal(modalId);
					handleDeleteColumn(id);
				}}
			>
				삭제하기
			</CreateModal>,
			modalId,
		);
	};

	const handleCreateColumnModal = () => {
		openModal(
			<CreateModal
				modalSize='sm'
				title='컬럼 관리'
				subTitle='이름'
				onColumnSubmit={handleCreateColumn}
				onCancel={() => closeModal(modalId)}
				titles={titles}
			/>,
			modalId,
		);
	};

	useEffect(() => {
		if (toastMessage) {
			void execute();
			const timer = setTimeout(() => {
				setToastMessage('');
			}, 1500);
			return () => clearTimeout(timer);
		}
	}, [toastMessage]);
	return (
		<>
			<BasicLayout>
				<div className='flex size-full flex-col overflow-hidden overflow-y-auto scrollbar-hide sm:max-h-[100%] sm:w-[308px] sm:overflow-y-auto md:max-h-[100%] md:w-[584px] md:overflow-y-auto lg:flex-row lg:overflow-x-auto'>
					{columnList &&
						columnList.map((column: Column) => (
							<div
								key={column.id}
								className='h-full w-[354px] shrink-0 border-r border-gray3 px-5 pb-5 pt-[22px] sm:h-auto sm:max-h-[470px] sm:w-[308px] sm:border-b sm:px-3 sm:pb-3 sm:pt-[17px] md:h-auto md:max-h-[364px] md:w-[584px] md:border-b md:border-r'
							>
								<CardList
									column={column}
									handleModifyColumn={() => handleModifyColumn(column.id)}
									handleToastMessage={handleToastMessage}
								/>
							</div>
						))}
					<div className='ml-4 mt-6'>
						<IconButton
							rounded='lg'
							src='/icons/plus.svg'
							iconSize={22}
							alt='plusImage'
							className='h-[70px] w-[354px] sm:mb-5 sm:h-[60px] sm:w-[284px] md:w-[544px] lg:mt-[43px]'
							onClick={handleCreateColumnModal}
						>
							새로운 컬럼 추가하기
						</IconButton>
					</div>
				</div>
			</BasicLayout>
			{toastMessage && (
				<div className='fixed bottom-[2%] flex h-12 w-[100%] justify-center'>
					<div className='mb-4 mr-4 h-12 w-96 rounded-xl bg-gray3 px-4 py-2 text-center text-xl font-semibold text-violet2'>
						<span>{toastMessage}</span>
					</div>
				</div>
			)}
		</>
	);
}
