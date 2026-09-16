let skills=document.querySelectorAll(".skill");
let button=document.querySelector(".btn");
button.addEventListener("click",function()
{
    skills.forEach(function(skill)
{
   skill.classList.toggle("highlighted");
});
});
