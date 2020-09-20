const close = () =>
{
    let closebutton = document.querySelector('.close');
    let modal = document.querySelector('.modal');
    let button = document.querySelectorAll('button');
    //let audio = document.querySelector('audio');
    closebutton.addEventListener("click", () =>
    {
        console.log('closebutton');
        modal.classList.toggle('modalActive');
        //audio.play();
    });
    button[0].addEventListener("click", () =>
    {
        console.log('closebutton');
        modal.classList.toggle('modalActive');
        //audio.play();
    });
    button[1].addEventListener("click", () =>
    {
        console.log('button');
        modal.classList.toggle('modalActive');
        //audio.play();
    });
};
const userselect = () =>
{
	let h1 = document.querySelectorAll('h1');
	let p = document.querySelectorAll('p');
	let i;
	for(i = 0; i < h1.length; i++)
	{
		h1[i].style.userSelect = 'none';
		p[i].style.userSelect = 'none';
	}
}
const app = () =>
{
	userselect();
    close();
}
app();
