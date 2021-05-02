import React , {useRef,useEffect,useState} from "react"

export default function RefHook(){
	const [,setDummy] = useState({});
	const inputRef = useRef();
	const divRef = useRef();
	const value = useRef(0);//Sadece dom değil herşeye referans olabilir.
	console.log(value);
	function onFocus(){
		inputRef.current.focus();
	}

	const divStyleChange = () => {
		divRef.current.style.border = "1px dotted red";
	}

	const increase = () => {
		setDummy({});
		value.current += 1;
	}

	useEffect( () => {
		console.log(inputRef);
	});
	return(
		<div ref={divRef}>
			<input ref={inputRef} placeholder="Yazı Alanı"/>
			<button onClick={onFocus}>Focus Ol</button>
			<button onClick={divStyleChange}>Div Border</button>
			<button onClick={increase}>Increase</button>

		</div>
	);
}