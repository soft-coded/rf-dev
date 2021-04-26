import { ReactNode } from "react";

import "./section-header.scss";

interface ChildrenType {
	children: ReactNode;
}

export default function SectionHeader({ children }: ChildrenType) {
	return (
		<header className="section-header">
			<h1>{children}</h1>
		</header>
	);
}
