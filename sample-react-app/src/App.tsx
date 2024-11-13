import "./App.css";
import { AdminConsentFailure } from "./components/AdminConsentFailure";
import { AdminConsentSuccessful } from "./components/AdminConsentSuccessful";

function App() {
	const urlParams = new URLSearchParams(window.location.search);
	const adminConsent = urlParams.get("admin_consent") as
		| "True"
		| "False"
		| null;
	const tenant = urlParams.get("tenant");
	const error = urlParams.get("error");
	const errorDescription = urlParams.get("error_description");
	const errorUri = urlParams.get("error_uri");

	return (
		<>
			<h1>SAMPLE REDIRECT PAGE</h1>
			<div className="logo-wrapper">
				<img
					className="logo"
					src="https://avatars.githubusercontent.com/u/66451487"
					width="128"
					height="128"
					alt="pa-y-kunimoto"
				/>
			</div>
			{adminConsent === "True" &&
			!error &&
			!errorDescription &&
			!errorUri &&
			tenant ? (
				<AdminConsentSuccessful tenantId={tenant as string} />
			) : (
				<AdminConsentFailure
					error={error || "Unable to grant admin consent"}
					errorDescription={errorDescription || "An unknown error occurred"}
					errorUri={errorUri || ""}
				/>
			)}
			<footer>
				<p>
					This is a sample redirect page that demonstrates how to handle the
					response from the admin consent endpoint in your app.
				</p>
				<p>
					<a
						href="https://github.com/pa-y-kunimoto/SAMPLE-REDIRECT-PAGE-from-Microsoft-Entra-ID"
						target="_blank"
						rel="noreferrer"
					>
						View the source code on GitHub
					</a>
				</p>
			</footer>
		</>
	);
}

export default App;
