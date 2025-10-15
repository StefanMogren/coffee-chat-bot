import "./index.css";

export const Message = ({ text, role }) => {
	return (
		<article
			className={`message message--${role === "user" ? "user" : "assistant"}`}>
			<h2 className='message__sender'>{role}</h2>
			<p className='message__content'>{text}</p>
		</article>
	);
};
