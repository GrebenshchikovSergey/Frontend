import Header from "./Header";
const PageLayout = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};

export default PageLayout;
