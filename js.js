let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
	if (event.key == 'Enter') {
        if(this.value != ''){
		let li = document.createElement('li')


        let task = document.createElement('span');
        task.classList.add('task');
		task.innerHTML = this.value;
        task.addEventListener('dblclick',function func(){
            let input = document.createElement('input')
            input.value = this.innerHTML
            this.innerHTML = ''
            this.appendChild(input)
            input.addEventListener('keydown',function(event){
                if (event.key == 'Enter') {
                    task.innerHTML = this.value
                    task.addEventListener('click',func)
                }
            })
            this.removeEventListener('click',func)
        })
		li.appendChild(task);
		
		let remove = document.createElement('span');
        remove.classList.add('remove');
		remove.innerHTML = 'удалить';
        remove.addEventListener('click',function(){
            list.removeChild(li)
        })
		li.appendChild(remove);
		
		let mark = document.createElement('span');
        mark.classList.add('mark');
		mark.innerHTML = 'сделано';
        mark.addEventListener('click',function(){
            task.classList.add('done')
        })
		li.appendChild(mark);


        list.appendChild(li)
        this.value = ''
    }
	}
});