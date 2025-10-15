import "./message.css";

function Message({ content, role }) {
	const isOwnMessage = role === "user";

	return (
		<article className={`message-row ${isOwnMessage ? "own" : "assistant"}`}>
			<section className='message__discussion'>
				<span>{role}</span>
				<p>{content}</p>
			</section>
		</article>
	);
}
export default Message;
