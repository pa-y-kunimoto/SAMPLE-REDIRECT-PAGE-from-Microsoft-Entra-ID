import type React from "react";

export const AdminConsentSuccessful: React.FC<{
	tenantId: string;
}> = ({ tenantId }) => {
	return (
		<div>
			<h2>Admin Consent Successful</h2>
			<h3>
				必要なアプリケーションのアクセス許可に成功しました。
				<br />
				タブを閉じてください。
			</h3>
			<p>Tenant ID: {tenantId}</p>
		</div>
	);
};
