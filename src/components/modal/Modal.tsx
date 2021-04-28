import { useRef } from "react";
import { createPortal } from "react-dom";

import "./modal.scss";

interface ChildrenType {
	show: boolean;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
	image: string;
	title: string;
	content: string;
}

export default function Modal({
	show,
	setShowModal,
	image,
	title,
	content
}: ChildrenType) {
	const modalRef = useRef<HTMLDivElement>(null);
	function closeModal() {
		modalRef.current!.className =
			"modal animate__animated animate__fadeOutDown";
		const backdrop = document.querySelector<HTMLElement>(".backdrop")!;
		backdrop.style.animation = "fade-out 0.3s ease-in-out";
		setTimeout(() => {
			backdrop.style.display = "none";
		}, 299);
		setTimeout(() => {
			setShowModal(false);
		}, 999);
	}

	return show
		? createPortal(
				<div
					ref={modalRef}
					className="modal animate__animated animate__fadeInUp"
				>
					<div className="inner">
						<img src={image} alt={title} />
						<h2>{title}</h2>
						<p>{content}</p>
						<button onClick={closeModal}>Close</button>
					</div>
				</div>,
				document.getElementById("modal-portal")!
		  )
		: null;
}
