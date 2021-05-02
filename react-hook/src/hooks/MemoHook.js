import React , { useState , useMemo } from "react";
let users = [
	{id:1,name:"Osman"},
	{id:2,name:"Nursel"},
	{id:3,name:"Cansu"},
];

//useMemo tutup search değişince rendera sokar.
//useCallback ve useMemo aynı işi yapar temelde React.memo ile propslarıda memoryde tutabilirsin 
const MemoHook = () => {
	const [text,setText] = useState('');
	const [search,setSearch] = useState('');
	const handleText = (event) => {
		setText(event.target.value);
	}
	const searchChange = () => {
		setSearch(text);
	}
	const filteredData = useMemo(() => users.filter((user) => {
			 console.log("Filter çalıştı")
			 return user.name.toLowerCase().includes(search.toLowerCase());
	}),[search]);
	
	
	return(
		<div>
			<input type="text" value={text} onChange={handleText} />
			<button onClick={searchChange}>Ara</button>
			<List list={filteredData}/>
		</div>
	);
	
}

const List = ({list}) => {
	console.log(list);
	return(
		<div>
			<ul>
				{list && list.map((item,index) => {
					return(
						<li key={item.id}>{item.name}</li>
					);
				})}
			</ul>
		</div>
	);
}

export default MemoHook;