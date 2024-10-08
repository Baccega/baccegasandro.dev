import React from "react";
import { MdOutlineWork, MdSchool } from "react-icons/md";
// import { GiAce } from "react-icons/gi";
import { RiBracesFill, RiFlaskFill, RiMessage2Line } from "react-icons/ri";
import type { SingleCard } from "../types/types";

interface Props {
	type: SingleCard["type"];
	className: string;
}

export default function TypeIcon(props: Props) {
	const { type, className } = props;

	switch (type) {
		case "work":
			return <MdOutlineWork className={className} />;
		case "education":
			return <MdSchool className={className} />;
		case "project":
			return <RiFlaskFill className={className} />;
		case "contact":
			return <RiMessage2Line className={className} />;
		case "bio":
			return <RiBracesFill className={className} />;
	}
}
