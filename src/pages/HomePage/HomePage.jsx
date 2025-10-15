import "./homePage.css";
import { useRef, useState } from "react";
import { ChatOllama } from "@langchain/ollama";
import Message from "../../components/Message/Message.jsx";

function HomePage() {
	const llm = new ChatOllama({
		model: "llama3.2",
	});
	const inputRef = useRef();
	const [messages, setMessages] = useState([]);

	async function sendAnswer(event) {
		event.preventDefault();
		const question = inputRef.current.value;

		const updatedMessages = [...messages];

		updatedMessages.push({ content: question, role: "user" });

		setMessages((prevState) => {
			return [...prevState, { content: question, role: "user" }];
		});
		// const formData = new FormData(event.target);
		// const formJson = Object.fromEntries(formData.entries());

		const answer = await llm.invoke(updatedMessages);
		setMessages((prevState) => {
			return [...prevState, { content: answer.content, role: "assistant" }];
		});
	}

	const messageComponents = messages.map((message, index) => {
		return (
			<Message content={message.content} role={message.role} key={index} />
		);
	});

	return (
		<main className='home-page'>
			<section>{messageComponents}</section>
			<form
				action='post'
				onSubmit={sendAnswer}
				className='home-page__form flex-column'>
				<label htmlFor='questionId'>
					Ask your question and I shall answer.
					<section className='flex-row'>
						<input
							type='text'
							className='home-page__input'
							ref={inputRef}
							name='question'
							id='questionId'
						/>
						<button className='home-page__btn'>Fråga</button>
					</section>
				</label>
			</form>
		</main>
	);
}

export default HomePage;
