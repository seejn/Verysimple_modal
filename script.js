const close = () =>
{
    let closebutton = document.querySelector('.close');
    let modal = document.querySelector('.modal');
    let button = document.querySelector('button');
    let audio = document.querySelector('audio');
    closebutton.addEventListener("click", () =>
    {
        console.log('closebutton');
        modal.classList.toggle('modalActive');
        audio.play();
    });
    button.addEventListener("click", () =>
    {
        console.log('closebutton');
        modal.classList.toggle('modalActive');
        audio.play();
    });
};
const app = () =>
{
    close();
}
app();