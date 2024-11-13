import type React from "react";

export const AdminConsentFailure: React.FC<{
	error: string;
	errorDescription: string;
	errorUri: string;
}> = ({ error, errorDescription, errorUri }) => {
	return (
		<div>
			<h2>Admin Consent Failed</h2>
			<h3>
				エラーが発生しました。
				<br />
				必要なアプリケーションのアクセス許可に失敗した可能性があります。
				<br />
				再度承認を行なっても問題が解決しない場合は、管理者にお問い合わせください。
			</h3>
			<p>Error: {error}</p>
			<p>Error Description: {errorDescription}</p>
			{errorUri && <p>Error URI: {errorUri}</p>}
		</div>
	);
};
