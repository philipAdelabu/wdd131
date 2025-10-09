
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const getChar = (e) => {
	var input = document.getElementById('display-input');
	var output = document.getElementById('display-result');
	var i = e.textContent;
	const inp = input.innerHTML;
	var result = 0;
    
	if(output.innerHTML === "ERR"){
		output.innerHTML = ""
	}

   if(('/, *, -, +,.'.indexOf(i) > -1) && ('/, *, -, +, . '.indexOf(inp[inp.length-1]) > -1)){
	    i = "";
   }

	if(i === '=' && input.innerHTML !== ''){
		if(('/, *, -, + , ., ='.indexOf(i) > -1) && ('/, *, -, + , ., ='.indexOf(input.innerHTML) > -1) && (input.innerHTML).length === 1){
            input.innerHTML = "";
			return ;
		} 
		 const exp = input.innerHTML;
		 try{
		 result = eval(exp);
		 output.innerHTML = result;
		 input.innerHTML = "";
		 }catch(e){
			 output.innerHTML = "ERR";
		     input.innerHTML = "";
		 }
	
		 return;
	 }

	 if(i === "CLR"){
		 output.innerHTML = "";
		 input.innerHTML = "";
		 return ;
	 }

	 if(i === "STR"){
		if(output.innerHTML !== ""){
			result = output.innerHTML;
			localStorage.setItem("mem", result);
			output.innerHTML = "";
		}
		return;
	 }

	 if(i === "RCL"){
		if(localStorage.getItem('mem') !== null){
			output.innerHTML = localStorage.getItem("mem");
		}
		return;
	 }

	 if(output.innerHTML !== "" && inp.length == 0 && ('/, *, -, + '.indexOf(i) > -1)){
	  input.innerHTML = output.innerHTML + "" + i;
   } else
     input.innerHTML = input.innerHTML + "" + i;
	 
}


const keys = document.getElementsByClassName('keys');

for(const key of keys){
     key.addEventListener('click',  () => {
		getChar(key);
	 });
}